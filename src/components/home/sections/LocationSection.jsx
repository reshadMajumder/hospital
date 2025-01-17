import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt,FaClock } from 'react-icons/fa';

import axios from 'axios';
import API_URL from '../../../data/ApiData';

function LocationSection() {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/hospital-info/`);
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
                  <span><FaMapMarkerAlt className="me-2" />
                  {contactInfo.address}</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <i className="fas fa-phone-alt me-3 text-primary "></i>
                  <span><FaPhone className="me-2" /> {contactInfo.phone}</span>
                </li>
                <li className="mb-3 d-flex align-items-center" style={{ fontSize: '0.8rem', cursor: 'pointer' }} onClick={() => window.location.href = `mailto:${contactInfo.email}`}>
                  <i className="fas fa-envelope me-3 text-primary"></i>
                  <span><FaEnvelope className="me-2" /> <a href={`mailto:${contactInfo.email}`} style={{ color: '#007bff', textDecoration: 'underline' }}>{contactInfo.email}</a></span>
                </li>
                <li className="d-flex align-items-center">
                  <i className="fas fa-clock me-3 text-primary"></i>
                  <span><FaClock className="me-2" />Mon-Fri: 8:00 AM - 8:00 PM</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={6} className="d-flex">
            <div className="map-container w-100 rounded overflow-hidden shadow" style={{ height: "300px" }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227.14782093158726!2d91.41192960623512!3d24.3685982015751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37514529fb0ed5a7%3A0xca8eb75a9cbfa8c7!2z4Kaq4Kaq4KeB4Kay4Ka-4KawIOCmnOCnh-CmqOCmvuCmsOCnh-CmsiDgprngpr7gprjgpqrgpr7gpqTgpr7gprI!5e0!3m2!1sen!2sbd!4v1735068235644!5m2!1sen!2sbd"
                
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LocationSection;