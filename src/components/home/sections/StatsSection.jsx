import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';

function StatsSection() {
  const stats = [
    { value: 50000, label: 'Patients Treated', suffix: '+' },
    { value: 100, label: 'Expert Consultants', suffix: '+' },
    { value: 25, label: 'Years Experience', suffix: '+' },
    { value: 200, label: 'Dedicated Staff', suffix: '+' }
  ];

  return (
    <section className="stats-section">
      <Container>
        <Row>
          {stats.map((stat, index) => (
            <Col md={3} className="text-center mb-4 mb-md-0" key={index}>
              <div className="stat-item">
                <h2>
                  <CountUp end={stat.value} duration={2.5} />
                  {stat.suffix}
                </h2>
                <p className="text-muted mb-0">{stat.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default StatsSection;