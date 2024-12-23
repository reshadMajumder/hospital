import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import { useEffect, useState } from 'react';
import { FaUserMd, FaHospital, FaUsers, FaHandHoldingMedical } from 'react-icons/fa';
import API_URL from '../../../data/ApiData';

function StatsSection() {
  const [stats, setStats] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`${API_URL}/api/hospital-stats/`);
        const data = await response.json();
        const formattedStats = [
          { 
            value: data.patientsTreated, 
            label: 'Patients Treated', 
            suffix: '+',
            icon: <FaHandHoldingMedical />
          },
          { 
            value: data.doctorsCount, 
            label: 'Expert Consultants', 
            suffix: '+',
            icon: <FaUserMd />
          },
          { 
            value: data.hospitalAge, 
            label: 'Years Experience', 
            suffix: '+',
            icon: <FaHospital />
          },
          { 
            value: data.staffsCount, 
            label: 'Dedicated Staff', 
            suffix: '+',
            icon: <FaUsers />
          }
        ];
        setStats(formattedStats);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="stats-section">
      <Container>
        <Row className="justify-content-center">
          {stats.map((stat, index) => (
            <Col md={6} lg={3} className="mb-4" key={index}>
              <div 
                className="stat-card"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-content">
                  <h2 className="stat-number">
                    <CountUp 
                      end={stat.value} 
                      duration={2} 
                      start={hoveredIndex === index ? 0 : stat.value}
                      separator=","
                    />
                    {stat.suffix}
                  </h2>
                  <p className="stat-label">{stat.label}</p>
                </div>
                <div className="stat-glow"></div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default StatsSection;