import { Card, Button, Badge } from 'react-bootstrap';
import { FaCalendarAlt, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function DoctorCard({ doctor }) {
  return (
    <Card className="doctor-card h-100">
      <div className="doctor-image-wrapper">
        <Card.Img variant="top" src={doctor.image} alt={doctor.name} />
        <div className="doctor-overlay">
          <Button variant="light" className="me-2">
            <FaPhone /> Call Now
          </Button>
          <Button variant="primary">
            <FaCalendarAlt /> Book
          </Button>
        </div>
      </div>
      <Card.Body>
        <Badge bg="primary" className="mb-2">{doctor.specialty}</Badge>
        <Card.Title as="h5" className="mb-1">{doctor.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted small">
          {doctor.education}
        </Card.Subtitle>
        <Card.Text className="text-muted small mb-3">
          {doctor.description}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-primary">
            <FaCalendarAlt className="me-1" />
            {doctor.schedule}
          </small>
          <Link to={`/doctors/${doctor.id}`} className="btn btn-outline-primary btn-sm">
            View Profile
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default DoctorCard;