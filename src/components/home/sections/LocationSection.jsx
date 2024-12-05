import { Container, Row, Col } from 'react-bootstrap';
import GoogleMapComponent from '../../maps/GoogleMapComponent';

function LocationSection() {
  return (
    <section className="location-section">
      <Container>
        <h2 className="text-center mb-5">Find Us</h2>
        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <div className="contact-info p-4 bg-white rounded shadow-sm">
              <h3 className="h4 mb-4">Contact Information</h3>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong>Address:</strong> 123 Medical Center Drive, New York, NY 10001
                </li>
                <li className="mb-3">
                  <strong>Phone:</strong> (555) 123-4567
                </li>
                <li className="mb-3">
                  <strong>Email:</strong> info@medicalcenter.com
                </li>
                <li>
                  <strong>Hours:</strong> Mon-Fri: 8:00 AM - 8:00 PM
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <div className="map-container">
              <GoogleMapComponent />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LocationSection;