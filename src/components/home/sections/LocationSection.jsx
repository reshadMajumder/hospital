import { Container, Row, Col } from 'react-bootstrap';
import GoogleMapComponent from '../../maps/GoogleMapComponent';

function LocationSection() {
  return (
    <section className="location-section py-4">
      <Container>
        <h2 className="text-center mb-4 display-5">Find Us</h2>
        <Row className="align-items-stretch g-4">
          <Col lg={6} className="d-flex">
            <div className="contact-info p-4 bg-white rounded w-100 shadow" style={{minHeight: "300px"}}>
              <h3 className="h4 mb-4 text-primary">Contact Information</h3>
              <ul className="list-unstyled contact-list">
                <li className="mb-3 d-flex align-items-center">
                  <i className="fas fa-map-marker-alt me-3 text-primary"></i>
                  <span>123 Medical Center Drive, New York, NY 10001</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <i className="fas fa-phone-alt me-3 text-primary"></i>
                  <span>(555) 123-4567</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <i className="fas fa-envelope me-3 text-primary"></i>
                  <span>info@medicalcenter.com</span>
                </li>
                <li className="d-flex align-items-center">
                  <i className="fas fa-clock me-3 text-primary"></i>
                  <span>Mon-Fri: 8:00 AM - 8:00 PM</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={6} className="d-flex">
            <div className="map-container w-100 rounded overflow-hidden shadow" style={{height: "300px"}}>
              <GoogleMapComponent />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LocationSection;