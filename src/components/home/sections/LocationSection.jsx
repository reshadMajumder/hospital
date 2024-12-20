import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GoogleMapComponent from '../../maps/GoogleMapComponent';
import axios from 'axios';

function LocationSection() {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/hospital-info/');
        setContactInfo(response.data);
      } catch (error) {
        console.error('Error fetching contact info:', error);
      }
    };

    fetchContactInfo();
  }, []);

  if (!contactInfo) {
    return <div>Loading contact information...</div>;
  }

  return (
    <section className="location-section py-4">
      <Container>
        <h2 className="text-center mb-4 display-5">Find Us</h2>
        <Row className="align-items-stretch g-4">
          <Col lg={6} className="d-flex">
            <div className="contact-info p-4 bg-white rounded w-100 shadow" style={{ minHeight: "300px" }}>
              <h3 className="h4 mb-4 text-primary text-center">Contact Information</h3>
              <ul className="list-unstyled contact-list">
                <li className="mb-3 d-flex align-items-center">
                  <i className="fas fa-map-marker-alt me-3 text-primary"></i>
                  <span>Address: {contactInfo.address}</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <i className="fas fa-phone-alt me-3 text-primary"></i>
                  <span>Hotline: {contactInfo.phone}</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <i className="fas fa-envelope me-3 text-primary"></i>
                  <span>Email: {contactInfo.email}</span>
                </li>
                <li className="d-flex align-items-center">
                  <i className="fas fa-clock me-3 text-primary"></i>
                  <span>Time:Mon-Fri: 8:00 AM - 8:00 PM</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={6} className="d-flex">
            <div className="map-container w-100 rounded overflow-hidden shadow" style={{ height: "300px" }}>
              <GoogleMapComponent />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LocationSection;