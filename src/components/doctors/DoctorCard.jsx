import React from 'react';
import { motion } from 'framer-motion';
import { Card, Button } from 'react-bootstrap';
import '../../styles/DoctorCard.css';

const DoctorCard = ({ doctor, onViewProfile }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="doctor-card"
    >
    
      <div className="doctor-image-container">
      <motion.img
          src={doctor.image}
          alt={doctor.name}
          className="profile-image"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </div>
      <div className="doctor-info">
        <h3 className="doctor-name">{doctor.name}</h3>
        <p className="doctor-specialty">{doctor.specialization}</p>
        <div className="doctor-details">
          <p><strong>Department:</strong> {doctor.department}</p>
          <p><strong>Experience:</strong> {doctor.experience}</p>
        </div>
        <Button 
          className="view-profile-btn"
          onClick={() => onViewProfile(doctor)}
        >
          View Profile
        </Button>
      </div>
    </motion.div>
  );
};

export default DoctorCard;