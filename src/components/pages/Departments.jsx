import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import DoctorCard from '../doctors/DoctorCard';
import DoctorProfile from '../doctors/DoctorProfile';
import { FaArrowLeft, FaUserMd, FaBed, FaCalendarCheck, FaSearch } from 'react-icons/fa';
import axios from 'axios';
import API_URL from '../../data/ApiData';
import Spinner3D from '../common/Spinner3D'; // Import the spinner component

function Departments() {
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch both departments and doctors
        const [departmentsResponse, doctorsResponse] = await Promise.all([
          axios.get(`${API_URL}/api/departments/`),
          axios.get(`${API_URL}/api/doctors/`)
        ]);

        // Add additional info to departments data
        const departmentsWithInfo = departmentsResponse.data.map(dept => ({
          ...dept,
          description: `Specialized ${dept.name} department providing comprehensive care`,
          doctorsCount: doctorsResponse.data.filter(doc => doc.department.id === dept.id).length,
          bedsCount: dept.bedsCount  || 0,
          monthlyPatients: dept.monthlyPatients || 0
        }));

        setDepartments(departmentsWithInfo);
        setDoctors(doctorsResponse.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter doctors based on selected department
  const departmentDoctors = selectedDepartment
    ? doctors.filter(doctor => doctor.department.id === selectedDepartment.id)
    : [];

  // Filter doctors based on search query
  const filteredDoctors = departmentDoctors.filter(doctor => 
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialty.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewProfile = (doctor) => {
    setSelectedDoctor(doctor);
    setShowProfile(true);
  };

  if (loading) return <Spinner3D />; // Show spinner while loading
  if (error) return <div>{error}</div>;

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
                      {department.icon ? (
                        <img 
                          src={`${API_URL}${department.icon}`}
                          alt={department.name}
                          style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                        />
                      ) : (
                        <FaUserMd />
                      )}
                    </div>
                    <div className="logo-ring"></div>
                  </div>
                  <h3>{department.name}</h3>
                  <p>{department.description}</p>
                  <div className="department-stats">
                    <div className="stat-item">
                      <FaUserMd />
                      <span>{department.doctorsCount} Doctors</span>
                    </div>
                    {department.bedsCount > 0 && (
                      <div className="stat-item">
                        <FaBed />
                        <span>{department.bedsCount}+ Beds</span>
                      </div>
                    )}
                    {department.monthlyPatients > 0 && (
                      <div className="stat-item">
                        <FaCalendarCheck />
                        <span>{department.monthlyPatients}+ Monthly Patients</span>
                      </div>
                    )}
                  </div>
                  <button className="learn-more-btn">Learn More</button>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <div className="selected-department">
            <button 
              className="back-button mb-4 floating-back-btn"
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
                      <DoctorCard 
                        doctor={doctor} 
                        onViewProfile={handleViewProfile} 
                      />
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

        <DoctorProfile
          doctor={selectedDoctor}
          show={showProfile}
          onHide={() => setShowProfile(false)}
        />
      </Container>
    </div>
  );
}

export default Departments;