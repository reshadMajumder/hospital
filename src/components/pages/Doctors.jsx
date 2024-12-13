import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import DoctorCard from '../doctors/DoctorCard';
import DoctorProfile from '../doctors/DoctorProfile';
import { doctors } from '../../data/doctorsData';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  const departments = ['All', ...new Set(doctors.map(doctor => doctor.department))];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === '' || 
                             selectedDepartment === 'All' || 
                             doctor.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const handleViewProfile = (doctor) => {
    setSelectedDoctor(doctor);
    setShowProfile(true);
  };

  return (
    <Container className="py-5">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center mb-5">Our Expert Doctors</h2>

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