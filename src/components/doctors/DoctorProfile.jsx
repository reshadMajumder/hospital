import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';
import { FaCalendarAlt, FaPhone, FaEnvelope, FaClock, FaStar } from 'react-icons/fa';

function DoctorProfile({ doctor }) {
  return (
    <Container className="py-5">
      <Row>
        <Col lg={4} className="mb-4">
          <Card className="border-0 shadow-sm">
            <Card.Body className="text-center">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="rounded-circle mb-4"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
              <h4>{doctor.name}</h4>
              <p className="text-primary mb-4">{doctor.specialty}</p>
              <div className="d-grid gap-2">
                <Button variant="primary">
                  <FaCalendarAlt className="me-2" />
                  Book Appointment
                </Button>
                <Button variant="outline-primary">
                  <FaPhone className="me-2" />
                  Contact Now
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={8}>
          <Card className="border-0 shadow-sm mb-4">
            <Card.Body>
              <h5 className="mb-4">About Doctor</h5>
              <p>{doctor.description}</p>
              
              <Row className="mt-4">
                <Col md={6}>
                  <h6 className="text-primary mb-3">Education</h6>
                  <p>{doctor.education}</p>
                </Col>
                <Col md={6}>
                  <h6 className="text-primary mb-3">Experience</h6>
                  <p>{doctor.experience}</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="border-0 shadow-sm mb-4">
            <Card.Body>
              <h5 className="mb-4">Schedule</h5>
              <Table responsive borderless>
                <tbody>
                  <tr>
                    <td className="text-muted">
                      <FaClock className="me-2" />
                      Working Hours
                    </td>
                    <td>{doctor.schedule}</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DoctorProfile;