import { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import DoctorCard from '../doctors/DoctorCard';
import DoctorProfile from '../doctors/DoctorProfile';
import axios from 'axios';
import API_URL from '../../data/ApiData';
import Spinner3D from '../common/Spinner3D'; // Import the spinner component

const Staff = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/staff/`);
        setStaff(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching staff data');
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  const departments = ['All', ...new Set(staff.map(member => member.department.name))];

  const filteredStaff = staff.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.specialty.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === '' || 
                             selectedDepartment === 'All' || 
                             member.department.name === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const handleViewProfile = (member) => {
    setSelectedStaff(member);
    setShowProfile(true);
  };

  if (loading) return <Spinner3D />; // Show spinner while loading
  if (error) return <div>{error}</div>;

  return (
    <Container className="py-5">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center mb-2 py-4 mt-5">Our Medical Staff</h2>

        <div className="search-filter-container">
          <Row>
            <Col md={6} className="mb-3 mb-md-0">
              <Form.Control
                type="text"
                placeholder="Search by name or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
            <Col md={6}>
              <Form.Select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>{dept}</option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </div>

        <Row>
          {filteredStaff.map((member) => (
            <Col key={member.id} lg={4} md={6} className="mb-4">
              <DoctorCard 
                doctor={member} 
                onViewProfile={handleViewProfile}
              />
            </Col>
          ))}
        </Row>

        <DoctorProfile
          doctor={selectedStaff}
          show={showProfile}
          onHide={() => setShowProfile(false)}
        />
      </motion.div>
    </Container>
  );
};

export default Staff;