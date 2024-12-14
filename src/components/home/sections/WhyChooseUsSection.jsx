import { Container, Row, Col } from 'react-bootstrap';
import { FaUserMd, FaHospital, FaClock, FaAmbulance } from 'react-icons/fa';
import { useState } from 'react';

function WhyChooseUsSection() {
  const [activeCard, setActiveCard] = useState(null);

  const reasons = [
    {
      icon: <FaUserMd />,
      title: 'Expert Doctors',
      description: 'Our team consists of highly qualified and experienced medical professionals.',
      color: '#2196F3'
    },
    {
      icon: <FaHospital />,
      title: 'Modern Facilities',
      description: 'State-of-the-art medical equipment and comfortable environment.',
      color: '#4CAF50'
    },
    {
      icon: <FaClock />,
      title: '24/7 Service',
      description: 'Round-the-clock medical care and emergency services.',
      color: '#FF5722'
    },
    {
      icon: <FaAmbulance />,
      title: 'Emergency Care',
      description: 'Quick response time and efficient emergency medical services.',
      color: '#9C27B0'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="section-pattern"></div>
      <Container>
        <div className="section-header text-center">
          <span className="section-subtitle">Why Choose Us</span>
          <h2 className="section-title">Excellence in Healthcare</h2>
        </div>
        <Row className="justify-content-center">
          {reasons.map((reason, index) => (
            <Col sm={6} lg={3} className="mb-3" key={index}>
              <div
                className={`feature-box ${activeCard === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                style={{ '--card-color': reason.color }}
              >
                <div className="feature-box-inner">
                  <div className="feature-front">
                    <div className="icon-container">
                      <div className="icon-circle"></div>
                      <div className="icon-wrapper">
                        {reason.icon}
                      </div>
                    </div>
                    <h3>{reason.title}</h3>
                    <button className="feature-btn">Learn More</button>
                  </div>
                  <div className="feature-back">
                    <p>{reason.description}</p>
                    
                  </div>
                </div>
                <div className="glow"></div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default WhyChooseUsSection;