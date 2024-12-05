import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DoctorCard({ doctor }) {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={doctor.image} alt={doctor.name} />
      <Card.Body>
        <Card.Title>{doctor.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{doctor.specialty}</Card.Subtitle>
        <Card.Text>{doctor.description}</Card.Text>
        <Link to={`/doctors/${doctor.id}`}>
          <Button variant="primary">View Profile</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default DoctorCard;