import { useState } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import { departments } from '../../data/departments';

const staffList = [
  {
    id: 1,
    name: "Jane Wilson",
    department: "cardiology",
    role: "Head Nurse",
    image: "/images/staff/staff-1.jpg",
    experience: "10+ years"
  },
  {
    id: 2,
    name: "Robert Brown",
    department: "neurology",
    role: "Senior Nurse",
    image: "/images/staff/staff-2.jpg",
    experience: "8+ years"
  },
  {
    id: 3,
    name: "Emily Davis",
    department: "pediatrics",
    role: "Nurse Practitioner",
    image: "/images/staff/staff-3.jpg",
    experience: "5+ years"
  }
];

function Staff() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const filteredStaff = staffList.filter(staff => {
    const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         staff.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || staff.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Our Staff</h2>
      <Row className="mb-4">
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Search staff by name or role"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={6}>
          <Form.Select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="all">All Departments</option>
            {departments.map((department) => (
              <option key={department.id} value={department.id}>
                {department.name}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
      <Row>
        {filteredStaff.map((staff) => (
          <Col key={staff.id} md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={staff.image} alt={staff.name} />
              <Card.Body>
                <Card.Title>{staff.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{staff.role}</Card.Subtitle>
                <Card.Text>
                  Department: {departments.find(d => d.id === staff.department)?.name}
                  <br />
                  Experience: {staff.experience}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Staff;