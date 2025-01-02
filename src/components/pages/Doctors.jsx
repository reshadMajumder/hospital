import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import DoctorCard from '../doctors/DoctorCard';
import DoctorProfile from '../doctors/DoctorProfile';
import axios from 'axios';
import API_URL from '../../data/ApiData';
import Spinner3D from '../common/Spinner3D';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchTerm(search);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/doctors/`);
        setDoctors(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching doctors data');
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const departments = ['All', ...new Set(doctors.map(doctor => doctor.department.name))];

  const filteredDoctors = doctors.filter(doctor => {
    const searchTermLower = searchTerm.toLowerCase();
    const matchesSearch = 
      doctor.name.toLowerCase().includes(searchTermLower) ||
      doctor.specialty.name.toLowerCase().includes(searchTermLower) ||
      doctor.department.name.toLowerCase().includes(searchTermLower);
    const matchesDepartment = selectedDepartment === '' || 
                             selectedDepartment === 'All' || 
                             doctor.department.name === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const handleViewProfile = (doctor) => {
    setSelectedDoctor(doctor);
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
        <h2 className="text-center mb-2 py-4 mt-5">Our Expert Doctors</h2>

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
          {filteredDoctors.map((doctor) => (
            <Col key={doctor.id} lg={4} md={6} className="mb-4">
              <DoctorCard 
                doctor={doctor} 
                onViewProfile={handleViewProfile}
              />
            </Col>
          ))}
        </Row>

        <DoctorProfile
          doctor={selectedDoctor}
          show={showProfile}
          onHide={() => setShowProfile(false)}
        />
      </motion.div>
    </Container>
  );
};

export default Doctors;