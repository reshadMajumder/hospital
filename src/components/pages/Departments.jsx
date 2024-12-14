import { useState } from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { departments } from '../../data/departments';
import { doctorsList } from '../../data/doctors';
import DoctorCard from '../doctors/DoctorCard';
import { FaArrowLeft, FaUserMd, FaBed, FaCalendarCheck, FaSearch, FaHeart, FaBrain, FaXRay, FaTooth, FaChild, FaLungs, FaBone, FaEye, FaStethoscope } from 'react-icons/fa';

function Departments() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const departmentDoctors = selectedDepartment
    ? doctorsList.filter(doctor => doctor.department === selectedDepartment.id)
    : [];

  const filteredDoctors = departmentDoctors.filter(doctor => 
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="departments-section">
      <Container className="py-5 mt-5">
        {!selectedDepartment ? (
          <Row className="g-4">
            {departments.map((department) => (
              <Col key={department.id} md={6} lg={4}>
                <div 
                  className="department-card"
                  onClick={() => setSelectedDepartment(department)}
                >
                  <div className="department-logo">
                    <div className="logo-circle">
                      {department.icon}
                    </div>
                    <div className="logo-ring"></div>
                  </div>
                  <h3>{department.name}</h3>
                  <p>{department.description}</p>
                  <div className="department-stats">
                    <div className="stat-item">
                      <FaUserMd />
                      <span>{department.doctorsCount || '10+'} Doctors</span>
                    </div>
                    <div className="stat-item">
                      <FaBed />
                      <span>{department.bedsCount || '50+'} Beds</span>
                    </div>
                    <div className="stat-item">
                      <FaCalendarCheck />
                      <span>{department.appointmentsCount || '100+'} Monthly Patients</span>
                    </div>
                  </div>
                  <button className="learn-more-btn">Learn More</button>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <div className="selected-department">
            <button 
              className="back-button mb-4"
              onClick={() => setSelectedDepartment(null)}
            >
              <FaArrowLeft className="me-2" />
              Back to Departments
            </button>
            
            <div className="department-header mb-5">
              <h2 className="mb-4">{selectedDepartment.name} Department</h2>
              <p className="lead text-muted mb-4">{selectedDepartment.description}</p>
              
              <div className="department-search mb-5">
                <InputGroup className="search-input-group">
                  <InputGroup.Text className="bg-transparent border-end-0">
                    <FaSearch className="text-muted" />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Search doctors by name or specialty..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border-start-0 ps-0"
                  />
                </InputGroup>
              </div>
            </div>

            <div className="department-doctors">
              <div className="doctors-header d-flex justify-content-between align-items-center mb-4">
                <h3 className="mb-0">Our Specialists</h3>
                <span className="text-muted">
                  {filteredDoctors.length} Doctor{filteredDoctors.length !== 1 ? 's' : ''} Found
                </span>
              </div>
              
              {filteredDoctors.length > 0 ? (
                <Row className="g-4">
                  {filteredDoctors.map((doctor) => (
                    <Col key={doctor.id} md={6} lg={4}>
                      <DoctorCard doctor={doctor} />
                    </Col>
                  ))}
                </Row>
              ) : (
                <div className="text-center py-5">
                  <p className="text-muted mb-0">No doctors found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Departments;