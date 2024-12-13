import React from 'react';
import { Modal,Button, Row, Col, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';

const DoctorProfile = ({ doctor, show, onHide }) => {
  if (!doctor) return null;

  return (
    <Modal 
      show={show} 
      onHide={onHide}
      size="lg"
      centered
      className="doctor-profile-modal"
    >
      <div className="doctor-profile-header d-flex justify-content-between align-items-center">
        <div>
          <h4 className="mb-0">{doctor.name}</h4>
          <p className="mb-0">{doctor.specialization}</p>
        </div>
        <Button 
          variant="light" 
          onClick={onHide}
          className="close-button"
        >
          ×
        </Button>
        
      </div>
      
      
      <div className="profile-image-container">
        <motion.img
          src={doctor.image}
          alt={doctor.name}
          className="profile-image"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </div>

      <Modal.Body className="pt-4">
        
      
        <Row>
          <Col md={6}>
            <h5>Professional Information</h5>
            <p><strong>Department:</strong> {doctor.department}</p>
            <p><strong>Experience:</strong> {doctor.experience}</p>
            <p><strong>Education:</strong> {doctor.education}</p>
          </Col>
          <Col md={6}>
            <h5>Availability</h5>
            <p><strong>Days:</strong> {doctor.availability.days}</p>
            <p><strong>Hours:</strong> {doctor.availability.hours}</p>
            <p><strong>Languages:</strong> {doctor.languages.join(', ')}</p>
          </Col>
        </Row>

        <div className="mt-4">
          <h5>Biography</h5>
          <p>{doctor.bio}</p>
        </div>

        <div className="mt-4">
          <h5>Awards & Recognition</h5>
          {doctor.awards.map((award, index) => (
            <Badge 
              bg="primary" 
              className="me-2 mb-2" 
              key={index}
            >
              {award}
            </Badge>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DoctorProfile;