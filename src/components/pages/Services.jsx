import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHospital, FaStethoscope, FaUserMd, FaTooth } from 'react-icons/fa';

function Services() {
  const services = [
    {
      icon: <FaHospital />,
      title: 'Hospital Services',
      description: 'Comprehensive inpatient and outpatient care with state-of-the-art facilities.'
    },
    {
      icon: <FaStethoscope />,
      title: 'Diagnostic Services',
      description: 'Advanced diagnostic testing and imaging services for accurate diagnosis.'
    },
    {
      icon: <FaUserMd />,
      title: 'Outdoor Patient Department',
      description: 'Expert consultation and treatment for outpatient care.'
    },
    {
      icon: <FaTooth />,
      title: 'Mount Adora Dental Care',
      description: 'Complete dental care services from experienced dentists.'
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Our Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col md={6} lg={3} key={index} className="mb-4">
            <Card className="h-100 service-card">
              <Card.Body className="text-center">
                <div className="service-icon mb-3">
                  {service.icon}
                </div>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;