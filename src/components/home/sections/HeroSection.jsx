import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from '../../common/SearchBar/SearchBar';

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
              Find the right doctor for your needs
            </p>
            <div className="animate__animated animate__fadeInUp">
              <SearchBar />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;