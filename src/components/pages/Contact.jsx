import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';
import API_URL from '../../data/ApiData';
import Spinner3D from '../common/Spinner3D';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    message: '',
    type: ''
  });

  const [loading, setLoading] = useState(false);
  const [hospitalInfo, setHospitalInfo] = useState(null);
  const [infoLoading, setInfoLoading] = useState(true);

  useEffect(() => {
    const fetchHospitalInfo = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/hospital-info/`);
        setHospitalInfo(response.data);
      } catch (error) {
        console.error('Error fetching hospital info:', error);
      } finally {
        setInfoLoading(false);
      }
    };

    fetchHospitalInfo();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: '', type: '' });

    try {
      const response = await axios.post(`${API_URL}/api/contact/`, formData);
      setStatus({
        message: 'Thank you for your message. We will get back to you soon!',
        type: 'success'
      });
      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        message: 'There was an error sending your message. Please try again.',
        type: 'danger'
      });
    } finally {
      setLoading(false);
    }
  };

  if (infoLoading || loading) {
    return <Spinner3D />; // Show spinner while loading hospital info or sending message
  }

  return (
    <Container className="py-5 py-4 mt-5">
      <h2 className="text-center mb-5">Contact Us</h2>
      
      <Row className="mb-5">
        <Col md={4} className="text-center mb-4 mb-md-0">
          <FaPhone className="text-primary mb-3" size={30} />
          <h4>Phone</h4>
          <p className="clickable" onClick={() => window.location.href = `tel:${hospitalInfo?.phone}`}>
            {hospitalInfo?.phone || 'Not available'}
          </p>
          <p className="clickable" onClick={() => window.location.href = `tel:${hospitalInfo?.phone_Two}`}>
            {hospitalInfo?.phone_Two || 'Not available'}
          </p>
        </Col>
        <Col md={4} className="text-center mb-4 mb-md-0">
          <FaEnvelope className="text-primary mb-3" size={30} />
          <h4>Email</h4>
          <p>
            {hospitalInfo?.email ? (
              <a href={`mailto:${hospitalInfo.email}`} className="text-decoration-none">
                {hospitalInfo.email}
              </a>
            ) : (
              'Not available'
            )}
          </p>
        </Col>
        <Col md={4} className="text-center">
          <FaMapMarkerAlt className="text-primary mb-3" size={30} />
          <h4>Address</h4>
          <p>{hospitalInfo?.address || 'Not available'}</p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8}>
          {status.message && (
            <Alert variant={status.type} className="mb-4">
              {status.message}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button 
              variant="primary" 
              type="submit" 
              className="w-100"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;