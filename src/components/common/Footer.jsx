import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <h5 className="mb-4">Medical Center</h5>
            <p className="mb-4">Providing quality healthcare services since 1995. Your trusted partner in health and wellness.</p>
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
              <li className="mb-2">Cardiology</li>
              <li className="mb-2">Neurology</li>
              <li className="mb-2">Pediatrics</li>
              <li className="mb-2">Orthopedics</li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h5 className="mb-4">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <FaMapMarkerAlt className="me-2" />
                123 Medical Center Drive, New York, NY 10001
              </li>
              <li className="mb-3">
                <FaPhone className="me-2" />
                (555) 123-4567
              </li>
              <li className="mb-3">
                <FaEnvelope className="me-2" />
                info@medicalcenter.com
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Medical Center. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;