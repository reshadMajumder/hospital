import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import API_URL from '../../data/ApiData';
import Spinner3D from '../common/Spinner3D';
import '../../styles/About.css';
import StatsSection from '../home/sections/StatsSection';

function About() {
  
  const [currentImage, setCurrentImage] = useState(0);
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const aboutResponse = await axios.get(`${API_URL}/api/about/`);
        setAboutData(aboutResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (aboutData?.image_slider) {
      const timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % aboutData.image_slider.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [aboutData?.image_slider]);

  if (loading) return <Spinner3D />;
  if (!aboutData) return null;

  return (
    <div className="about-section mt-5">
      <div className="about-hero">
        <Container>
          <Row className="align-items-center min-vh-50">
            <Col lg={6}>
              <span className="badge bg-primary-subtle text-primary mb-3 px-3 py-2 rounded-pill">
                About Us
              </span>
              <h1 className="display-4 fw-bold mb-4">
                {aboutData.title}
              </h1>
              <p className="lead text-secondary mb-4">
                {aboutData.description}
              </p>
            </Col>
          </Row>
        </Container>
        <div className="slideshow-container">
          <div className="slideshow-wrapper">
            {aboutData.image_slider.map((image, index) => (
              <div
                key={image.id}
                className={`slide ${index === currentImage ? 'active' : ''}`}
                style={{ backgroundImage: `url(${API_URL}${image.image})` }}
              />
            ))}
            <div className="slide-indicators">
              {aboutData.image_slider.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentImage ? 'active' : ''}`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <StatsSection />

      <Container className="py-5">
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className="about-content pe-lg-5">
              <h2 className="h1 mb-4">{aboutData.title_two}</h2>
              <p className="lead mb-4">{aboutData.description_two}</p>
              <div className="commitment-list">
                {aboutData.pointed_text.map((item) => (
                  <div key={item.id} className="commitment-item d-flex align-items-start mb-4">
                    <div className="commitment-icon me-3">
                      <div className="icon-circle"></div>
                    </div>
                    <div>
                      <h3 className="h5 mb-2">{item.text}</h3>
                      <p className="text-muted mb-0">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-image-wrapper">
              <img 
                src={`${API_URL}${aboutData.image_two}`}
                alt="Medical Center Building" 
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>
          </Col>
        </Row>

        <Row className="mt-5 pt-5 g-4">
          {aboutData.card_text.map((card) => (
            <Col md={4} key={card.id}>
              <div className="vision-card text-center p-4 rounded-4 h-100">
                <div className="vision-icon mb-3">
                  <img 
                    src={`${API_URL}${card.icon}`} 
                    alt={card.title}
                    className="card-icon"
                    style={{ width: '50px', height: '50px' }}
                  />
                </div>
                <h3 className="h4 mb-3 vision-title animate__animated animate__fadeInDown">
                  {card.title}
                </h3>
                <p className="mb-0 vision-text animate__animated animate__fadeIn animate__delay-1s">
                  {card.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default About;