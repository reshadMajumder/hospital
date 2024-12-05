import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUserMd, FaHospital, FaClock, FaAmbulance } from 'react-icons/fa';

function WhyChooseUsSection() {
  const reasons = [
    {
      icon: <FaUserMd />,
      title: 'Expert Doctors',
      description: 'Our team consists of highly qualified and experienced medical professionals.'
    },
    {
      icon: <FaHospital />,
      title: 'Modern Facilities',
      description: 'State-of-the-art medical equipment and comfortable environment.'
    },
    {
      icon: <FaClock />,
      title: '24/7 Service',
      description: 'Round-the-clock medical care and emergency services.'
    },
    {
      icon: <FaAmbulance />,
      title: 'Emergency Care',
      description: 'Quick response time and efficient emergency medical services.'
    }
  ];

  return (
    <section className="why-choose-us">
      <Container>
        <h2 className="text-center mb-5">Why Choose Us</h2>
        <Row>
          {reasons.map((reason, index) => (
            <Col md={3} key={index} className="mb-4">
              <Card className="h-100 text-center border-0 shadow-sm">
                <Card.Body>
                  <div className="icon-wrapper mb-3">
                    {reason.icon}
                  </div>
                  <Card.Title>{reason.title}</Card.Title>
                  <Card.Text>{reason.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default WhyChooseUsSection;