import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../../../data/ApiData';
import Spinner3D from '../../common/Spinner3D';

function WhyChooseUsSection() {
  const [activeCard, setActiveCard] = useState(null);
  const [reasons, setReasons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReasons = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/why-trust-us/`);
        // Add color property to each reason
        const reasonsWithColors = response.data.map((reason, index) => ({
          ...reason,
          color: getColorByIndex(index)
        }));
        setReasons(reasonsWithColors);
      } catch (error) {
        console.error('Error fetching reasons:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReasons();
  }, []);

  // Helper function to assign colors
  const getColorByIndex = (index) => {
    const colors = ['#2196F3', '#4CAF50', '#FF5722', '#9C27B0'];
    return colors[index % colors.length];
  };

  if (loading) return <Spinner3D />;

  return (
    <section className="why-choose-us">
      <div className="section-pattern"></div>
      <Container>
        <div className="section-header text-center">
          <h2 className="section-title">Why Patients Trust Us?</h2>
        </div>
        <Row className="justify-content-center">
          {reasons.map((reason, index) => (
            <Col sm={6} lg={3} className="mb-3" key={reason.id}>
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
                        <img 
                          src={`${API_URL}${reason.icon}`} 
                          alt={reason.title}
                          style={{ width: '30px', height: '30px' }}
                        />
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