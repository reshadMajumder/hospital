import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

function HeroSection() {
  return (
    <section className="hero-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h1 className="animate__animated animate__fadeInDown">
              Your Health - Our Priority
            </h1>
            <p className="lead animate__animated animate__fadeInUp mb-4">
              Let us help you find the care and support you need
            </p>
            <Form className="doctor-search animate__animated animate__fadeInUp">
              <Row className="justify-content-center">
                <Col md={8}>
                  <div className="position-relative">
                    <Form.Control
                      type="text"
                      placeholder="Search by name or specialty"
                      className="shadow-sm py-3"
                    />
                    <Button variant="primary" className="search-btn">
                      <FaSearch className="me-2" />
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;