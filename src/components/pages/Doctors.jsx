import { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { doctorsList } from '../../data/doctors';
import DoctorCard from '../doctors/DoctorCard';
import DoctorFilter from '../doctors/DoctorFilter';

function Doctors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const filteredDoctors = doctorsList.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || doctor.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Our Doctors</h2>
      <Row className="mb-4">
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Search doctors by name or specialty"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={6}>
          <DoctorFilter
            selectedDepartment={selectedDepartment}
            onDepartmentChange={setSelectedDepartment}
          />
        </Col>
      </Row>
      <Row>
        {filteredDoctors.map((doctor) => (
          <Col key={doctor.id} md={6} lg={4} className="mb-4">
            <DoctorCard doctor={doctor} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Doctors;