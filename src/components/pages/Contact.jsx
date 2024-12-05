import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Contact Us</h2>
      
      <Row className="mb-5">
        <Col md={4} className="text-center mb-4 mb-md-0">
          <FaPhone className="text-primary mb-3" size={30} />
          <h4>Phone</h4>
          <p>(555) 123-4567</p>
        </Col>
        <Col md={4} className="text-center mb-4 mb-md-0">
          <FaEnvelope className="text-primary mb-3" size={30} />
          <h4>Email</h4>
          <p>info@medicalcenter.com</p>
        </Col>
        <Col md={4} className="text-center">
          <FaMapMarkerAlt className="text-primary mb-3" size={30} />
          <h4>Address</h4>
          <p>123 Medical Center Drive<br />New York, NY 10001</p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} required />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;