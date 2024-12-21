import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServiceSection from '../services/ServiceSection';
import ServiceHeader from '../services/ServiceHeader';
import axios from 'axios';
import API_URL from '../../data/ApiData';
import '../../styles/services.css';
import Spinner3D from '../common/Spinner3D';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/services/`);
        setServices(response.data);
      } catch (err) {
        setError('Error fetching services data');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <Spinner3D />;
  }

  if (error) {
    return (
      <div className="text-center py-5 text-danger">
        <h3>{error}</h3>
      </div>
    );
  }

  return (
    <div className="services-page mt-4">
      <ServiceHeader />
      <Container>
        <Row>
          {services.map((service) => (
            <Col lg={6} className="mb-4" key={service.id}>
              <ServiceSection 
                title={service.title}
                icon={`${API_URL}${service.icon}`}
                services={service.services.map(item => item.name)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;