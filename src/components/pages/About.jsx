import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col lg={6}>
          <h2 className="mb-4">About Medical Center</h2>
          <p className="lead mb-4">
            Providing exceptional healthcare services since 1995, Medical Center has been at the forefront of medical excellence and patient care.
          </p>
          <p className="mb-4">
            Our state-of-the-art facilities, combined with our team of highly qualified medical professionals, ensure that patients receive the best possible care using the latest medical technologies and treatments.
          </p>
          <p>
            We are committed to:
          </p>
          <ul>
            <li>Excellence in patient care</li>
            <li>Continuous medical education and research</li>
            <li>Community health and wellness</li>
            <li>Affordable and accessible healthcare</li>
          </ul>
        </Col>
        <Col lg={6}>
          <img 
            src="/images/about/hospital.jpg" 
            alt="Medical Center Building" 
            className="img-fluid rounded shadow-lg"
          />
        </Col>
      </Row>

      <Row className="py-5">
        <Col md={4} className="mb-4">
          <h3 className="h4 mb-3">Our Mission</h3>
          <p>To provide exceptional healthcare services while maintaining the highest standards of medical practice and patient care.</p>
        </Col>
        <Col md={4} className="mb-4">
          <h3 className="h4 mb-3">Our Vision</h3>
          <p>To be the leading healthcare provider, recognized for excellence in medical services and patient satisfaction.</p>
        </Col>
        <Col md={4} className="mb-4">
          <h3 className="h4 mb-3">Our Values</h3>
          <p>Integrity, compassion, excellence, and innovation in everything we do to serve our patients and community.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;