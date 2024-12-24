import { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import axios from 'axios';
import API_URL from '../../data/ApiData';

function Footer() {
  const [footerData, setFooterData] = useState(null);
  const [hospitalInfo, setHospitalInfo] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [footerResponse, infoResponse, servicesResponse] = await Promise.all([
          axios.get(`${API_URL}/api/footer/`),
          axios.get(`${API_URL}/api/hospital-info/`),
          axios.get(`${API_URL}/api/services/`)
        ]);
        
        setFooterData(footerResponse.data);
        setHospitalInfo(infoResponse.data);
        setServices(servicesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return null;

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <h5 className="mb-4">{footerData?.title || 'Medical Center'}</h5>
            <p className="mb-4">{footerData?.description || 'Providing quality healthcare services.'}</p>
            <div className="social-links">
              <a href="#" className="me-3"><FaFacebookF /></a>
              <a href="#" className="me-3"><FaTwitter /></a>
              <a href="#" className="me-3"><FaLinkedinIn /></a>
              <a href="#" className="me-3"><FaInstagram /></a>
            </div>
          </Col>
          <Col lg={2} md={6}>
            <h5 className="mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li className="mb-2"><Link to="/services" className="text-light text-decoration-none">Services</Link></li>
              <li className="mb-2"><Link to="/doctors" className="text-light text-decoration-none">Doctors</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h5 className="mb-4">Our Services</h5>
            <ul className="list-unstyled">
              {services.slice(0, 4).map((service) => (
                <li key={service.id} className="mb-2">{service.title}</li>
              ))}
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h5 className="mb-4">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <FaMapMarkerAlt className="me-2" />
                {hospitalInfo?.address}
              </li>
              <li className="mb-3">
                <FaPhone className="me-2" />
                {hospitalInfo?.phone}
              </li>
              <li className="mb-3">
                <FaEnvelope className="me-2" />
                {hospitalInfo?.email}
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row className="align-items-center">
          <Col className="text-center pb-5 mb-1">
            <p className="mb-0">&copy; {new Date().getFullYear()} {hospitalInfo?.name || 'Medical Center'}. All rights reserved.</p>
            {/* <Button variant="link" onClick={handleShow} className="text-muted" style={{ fontSize: '0.8rem' }}>Developed by</Button> */}
          </Col>
        </Row>
      </Container>
{/* 
      <Modal show={showModal} onHide={handleClose} className="modal-3d">
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>Developer Info</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <div className="d-flex justify-content-around">
            <div className="text-center">
              <img src="/images/reshad.png" alt="reshad" className="rounded-circle shadow" width="100" />
              <h6>jahidul hassan reshad</h6>
              <p><a href="https://jahidulhassanreshad.co" target="_blank" rel="noopener noreferrer">Website</a></p>
              <p><a href="https://github.com/reshadMajumder" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            </div>
            <div className="text-center">
              <img src="images/nayem.png" alt="Developer 2" className="rounded-circle shadow" width="100" />
              <h6>Md. Nayem Hossain</h6>
              <p><a href="https://developer2website.com" target="_blank" rel="noopener noreferrer">Website</a></p>
              <p><a href="https://github.com/developer2" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </footer>
  );
}

export default Footer;