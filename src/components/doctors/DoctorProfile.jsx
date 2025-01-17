import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import API_URL from '../../data/ApiData';

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
      <Modal.Header closeButton className="doctor-profile-header">
        <Modal.Title>Doctor Profile</Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-4">
        <div className="profile-image-container">
          {doctor.image && (
            <motion.img
              src={`${API_URL}${doctor.image}`}
              alt={doctor.name}
              className="profile-image"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </div>

        <div className="text-center mb-4">
          {doctor.name && <h3>{doctor.name}</h3>}
          {doctor.specialty?.name && (
            <p className="text-primary mb-2">{doctor.specialty.name}</p>
          )}
          {doctor.department?.name && (
            <p className="text-muted">{doctor.department.name}</p>
          )}
        </div>

        <Row>
          {doctor.education?.length > 0 && (
            <Col md={6}>
              <h5>Education</h5>
              <ul className="list-unstyled">
                {doctor.education.map((edu, index) => (
                  <li key={index}>{edu.name}</li>
                ))}
              </ul>
            </Col>
          )}

          {doctor.experience && (
            <Col md={6}>
              <h5>Experience</h5>
              <p>{doctor.experience} years</p>
            </Col>
          )}
        </Row>

        {doctor.WorkingDays && (
          <Row className="mt-3">
            <Col md={6}>
              <h5>Working Days</h5>
              <p>{doctor.WorkingDays}</p>
            </Col>
          </Row>
        )}

        {doctor.schedule && (
          <Row className="mt-3">
            <Col md={6}>
              <h5>Schedule Hours</h5>
              <p>{doctor.schedule}</p>
            </Col>
          </Row>
        )}

        {doctor.language && (
          <Row className="mt-3">
            <Col md={12}>
              <h5>Languages</h5>
              <p>{doctor.language}</p>
            </Col>
          </Row>
        )}

        {doctor.description && (
          <Row className="mt-3">
            <Col md={12}>
              <h5>About</h5>
              <p>{doctor.description}</p>
            </Col>
          </Row>
        )}

        {doctor.recognition && (
          <Row className="mt-3">
            <Col md={12}>
              <h5>Recognition</h5>
              <p>{doctor.recognition}</p>
            </Col>
          </Row>
        )}
        {doctor.bmdc_registration && (
          <Row className="mt-3">
            <Col md={12}>
              <h5>BMDC Registration</h5>
              <p>{doctor.bmdc_registration}</p>
            </Col>
          </Row>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default DoctorProfile;