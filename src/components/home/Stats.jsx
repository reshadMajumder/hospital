import CountUp from 'react-countup';
import { Container, Row, Col } from 'react-bootstrap';

function Stats() {
  return (
    <section className="stats-section">
      <Container>
        <Row>
          <Col md={3} className="text-center">
            <div className="stat-item">
              <h2>
                <CountUp end={50000} duration={2.5} />+
              </h2>
              <p>Patients Treated</p>
            </div>
          </Col>
          <Col md={3} className="text-center">
            <div className="stat-item">
              <h2>
                <CountUp end={100} duration={2.5} />+
              </h2>
              <p>Expert Consultants</p>
            </div>
          </Col>
          <Col md={3} className="text-center">
            <div className="stat-item">
              <h2>
                <CountUp end={25} duration={2.5} />+
              </h2>
              <p>Years Experience</p>
            </div>
          </Col>
          <Col md={3} className="text-center">
            <div className="stat-item">
              <h2>
                <CountUp end={200} duration={2.5} />+
              </h2>
              <p>Dedicated Staff</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Stats;