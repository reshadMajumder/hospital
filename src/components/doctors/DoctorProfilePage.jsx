import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaStar, FaCalendarAlt, FaLanguage, FaTrophy } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../data/ApiData';
import Spinner3D from '../common/Spinner3D';

function DoctorProfilePage() {
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/doctors/${id}/`);
        setDoctor(response.data);
      } catch (error) {
        console.error('Error fetching doctor:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  if (loading) return <Spinner3D />;
  if (!doctor) return <div>Doctor not found</div>;

  return (
    <div className="doctor-profile-page" style={{ marginTop: '200px' }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="profile-card">
              <div className="profile-header">
                <div className="profile-image-container">
                  <img 
                    src={`${API_URL}${doctor.image}`} 
                    alt={doctor.name} 
                    className="profile-image"
                  />
                </div>
                <div className="profile-info">
                  <h2 className="doctor-name">{doctor.name}</h2>
                  <p className="specialty">{doctor.specialty.name}</p>
                  <div className="department-badge">
                    {doctor.department.name}
                  </div>
                </div>
              </div>

              <div className="profile-body">
                

                <div className="info-section">
                  <h3>Education</h3>
                  <div className="education-list">
                    {doctor.education.map((edu, index) => (
                      <span key={index} className="education-item">
                        {edu.name}{index < doctor.education.length - 1 && ' • '}
                      </span>
                    ))}
                  </div>
                </div>

                <Row className="info-grid">
                  <Col md={6}>
                    <div className="info-item">
                      <FaCalendarAlt className="info-icon" />
                      <div>
                        <h4>Working Days</h4>
                        <p>{doctor.WorkingDays}</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="info-item">
                      <FaLanguage className="info-icon" />
                      <div>
                        <h4>Languages</h4>
                        <p>{doctor.language}</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="info-item">
                      <FaStar className="info-icon" />
                      <div>
                        <h4>Experience</h4>
                        <p>{doctor.experience} Years</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="info-item">
                      <FaTrophy className="info-icon" />
                      <div>
                        <h4>Recognition</h4>
                        <p>{doctor.recognition}</p>
                      </div>
                    </div>
                  </Col>
                </Row>

                <div className="schedule-section">
                  <h3>Schedule</h3>
                  <p className="schedule-time">{doctor.schedule}</p>
                </div>
                <div className="info-section">
                  <h3>About</h3>
                  <p>{doctor.description}</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DoctorProfilePage; 