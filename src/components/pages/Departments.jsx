import { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { departments } from '../../data/departments';
import { doctorsList } from '../../data/doctors';
import DoctorCard from '../doctors/DoctorCard';

function Departments() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const departmentDoctors = selectedDepartment
    ? doctorsList.filter(doctor => doctor.department === selectedDepartment.id)
    : [];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Our Departments</h2>
      {!selectedDepartment ? (
        <Row>
          {departments.map((department) => (
            <Col key={department.id} md={6} lg={3} className="mb-4">
              <Card 
                className="h-100 cursor-pointer" 
                onClick={() => setSelectedDepartment(department)}
              >
                <Card.Body className="text-center">
                  <Card.Title>{department.name}</Card.Title>
                  <Card.Text>{department.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <>
          <button 
            className="btn btn-link mb-4"
            onClick={() => setSelectedDepartment(null)}
          >
            ← Back to Departments
          </button>
          <h3 className="mb-4">{selectedDepartment.name} Department Doctors</h3>
          <Row>
            {departmentDoctors.map((doctor) => (
              <Col key={doctor.id} md={6} lg={4} className="mb-4">
                <DoctorCard doctor={doctor} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
}

export default Departments;