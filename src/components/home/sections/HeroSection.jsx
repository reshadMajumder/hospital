import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

function HeroSection() {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <h1 className="animate__animated animate__fadeInDown">
              Your Health Is Our Top Priority
            </h1>
            <p className="lead animate__animated animate__fadeInUp">
              Providing Quality Healthcare Services with Advanced Medical Technology
            </p>
            <Form className="doctor-search animate__animated animate__fadeInUp">
              <Row>
                <Col md={8} className="mb-3 mb-md-0">
                  <Form.Control
                    type="text"
                    placeholder="Search doctors by name or specialty"
                    className="shadow-sm"
                  />
                </Col>
                <Col md={4}>
                  <Button variant="primary" className="w-100 shadow-sm">
                    <FaSearch className="me-2" />
                    Search
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col lg={6} className="mt-4 mt-lg-0 animate__animated animate__fadeInRight">
            <div className="position-relative">
              <img 
                src="/images/hero-doctor.jpg" 
                alt="Professional Doctor" 
                className="img-fluid rounded shadow-lg"
              />
              <div className="appointment-card bg-white p-4 shadow-lg rounded position-absolute">
                <h4 className="text-primary mb-2">Book Appointment</h4>
                <p className="mb-0">Get instant appointment with our expert doctors</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;