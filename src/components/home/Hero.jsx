import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Hero() {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <h1>Your Health Is Our Priority</h1>
            <p>Find the right doctor and book an appointment in seconds</p>
            <Form className="doctor-search">
              <Row>
                <Col md={8}>
                  <Form.Control
                    type="text"
                    placeholder="Search doctors by name or specialty"
                  />
                </Col>
                <Col md={4}>
                  <Button variant="primary" className="w-100">Search</Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col lg={6}>
            <img src="/images/hero-doctor.jpg" alt="Doctor" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;