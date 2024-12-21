import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from '../../common/SearchBar/SearchBar';
import Spinner3D from '../../common/Spinner3D';
import axios from 'axios';
import API_URL from '../../../data/ApiData';

function HeroSection() {
  const [hospitalInfo, setHospitalInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHospitalInfo = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/hospital-info/`);
        setHospitalInfo(response.data);
      } catch (error) {
        console.error('Error fetching hospital info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHospitalInfo();
  }, []);

  if (loading) {
    return <Spinner3D />;
  }

  return (
    <section className="hero-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h1 className="animate__animated animate__fadeInDown">
              {hospitalInfo?.home_header || 'Your Health - Our Priority'}
            </h1>
            <p className="lead animate__animated animate__fadeInUp mb-4">
              {hospitalInfo?.home_header_two || 'Find the right doctor for your needs'}
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