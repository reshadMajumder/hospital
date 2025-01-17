import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from '../../common/SearchBar/SearchBar';

function HeroSection() {
  const heroStyle = {
    backgroundImage: `url('images/hero_bg.jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section className="hero-section" rel="preload" style={heroStyle}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} className="text-center">
            <h1 className="animate__animated animate__fadeInDown">
              Your Health - Is Our Priority
            </h1>
            <p className="lead animate__animated animate__fadeInUp">
              Find the right doctor for your needs
            </p>
            <div className="animate__animated animate__fadeInUp">
              <div className="search-container">
                <SearchBar />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;