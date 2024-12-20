import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import { useEffect, useState } from 'react';

function StatsSection() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/hospital-stats/');
        const data = await response.json();
        const formattedStats = [
          { value: data.patientsTreated, label: 'Patients Treated', suffix: '+' },
          { value: data.doctorsCount, label: 'Expert Consultants', suffix: '+' },
          { value: data.hospitalAge, label: 'Years Experience', suffix: '+' },
          { value: data.staffsCount, label: 'Dedicated Staff', suffix: '+' }
        ];
        setStats(formattedStats);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="stats-section mb-2">
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