import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import API_URL from '../../data/ApiData';
import SEO from '../common/SEO';

const StaffProfile = ({ doctor, show, onHide }) => {
  if (!doctor) return null;

  return (
    <>
      <SEO 
        title={`Dr. ${doctor.name} - ${doctor.specialty?.name}`}
        description={`Dr. ${doctor.name} is a ${doctor.specialty?.name} specialist with ${doctor.experience} years of experience. Learn more about their qualifications and schedule an appointment.`}
        keywords={`${doctor.name}, ${doctor.specialty?.name}, doctor, specialist, ${doctor.department?.name}`}
        ogType="profile"
        ogImage={`${API_URL}${doctor.image}`}
      />
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
        className="doctor-profile-modal"
      >
        <Modal.Header closeButton className="doctor-profile-header">
          <Modal.Title>Staff Profile</Modal.Title>
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
            {doctor.employee_id && (
              <p className="text-muted mb-2">Employee ID: {doctor.employee_id}</p>
            )}
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

          <Row className="mt-3">
            <Col md={6}>
              <h5>Working Days</h5>
              <p>{doctor.WorkingDays}</p>
            </Col>
            <Col md={6}>
              <h5>Schedule Hours</h5>
              <p>{doctor.schedule}</p>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={6}>
              <h5>Issue Date</h5>
              <p>{doctor.issue_date}</p>
            </Col>
            <Col md={6}>
              <h5>Expiration Date</h5>
              <p>{doctor.expiration_date}</p>
            </Col>
          </Row>

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
        </Modal.Body>
      </Modal>
    </>
  );
};

export default StaffProfile;