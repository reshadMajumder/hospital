import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import API_URL from '../../../data/ApiData';
import Spinner3D from '../../common/Spinner3D';

function StatusCards() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [hospitalInfo, setHospitalInfo] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const fetchHospitalInfo = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/hospital-info/`);
        setHospitalInfo(response.data);
      } catch (error) {
        console.error('Error fetching hospital info:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchHospitalInfo();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentDate(now);
      
      const isSaturday = now.getDay() === 6;
      const hour = now.getHours();
      const isWorkingHours = hour >= 8 && hour < 20;
      
      setIsOpen(!isSaturday && isWorkingHours);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const weeklySchedule = [
    { day: 'Monday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Thursday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Friday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Sunday', hours: '8:00 AM - 8:00 PM' },
  ];

  if (loading) {
    return <Spinner3D />; // Show spinner while loading
  }

  return (
    <>
      <div className="status-cards-wrapper">
        <div className="status-cards-container">
          <div className="status-card">
            <div className="card-inner">
              <h4 className="text-primary mb-2">Book Appointment</h4>
              <p className="mb-0">Get instant appointment </p>
              <p className="text-primary mt-2 fw-bold">
                Hotline: {hospitalInfo?.phone || 'Loading...'}
              </p>
            </div>
          </div>
          
          <div className="status-card" onClick={() => setShowCalendar(true)} style={{ cursor: 'pointer' }}>
            <div className="card-inner">
              <div className="d-flex align-items-center mb-2">
                <FaCalendarAlt className="calendar-icon me-2" />
                <h4 className="text-primary mb-0">Open Weekly Schedule</h4>
              </div>
              {/* <p className={`mt-2 fw-bold ${isOpen ? 'text-success' : 'text-danger'}`}>
                {isOpen ? 'Open Today' : 'Closed Today'}
              </p> */}
              <p className='mt-2 fw-bold text-success'>Open Today</p>
              <p className="mb-0 text-muted">
                <FaClock className="me-2" />
                {isOpen ? '8:00 AM - 8:00 PM' : 'Opens next at 8:00 AM'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Schedule Modal */}
      <Modal 
        show={showCalendar} 
        onHide={() => setShowCalendar(false)}
        centered
        className="schedule-modal"
      >
        <Modal.Header>
          <Modal.Title>Weekly Schedule</Modal.Title>
          <button 
            className="btn-close" 
            onClick={() => setShowCalendar(false)}
            aria-label="Close"
          ></button>
        </Modal.Header>
        <Modal.Body>
          <div className="weekly-schedule">
            {weeklySchedule.map((schedule, index) => (
              <div 
                key={schedule.day} 
                className={`schedule-item ${currentDate.getDay() === index + 1 ? 'current-day' : ''}`}
              >
                <div className="day-name">{schedule.day}</div>
                <div className="hours">
                  <FaClock className="clock-icon me-2" />
                  {schedule.hours}
                </div>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default StatusCards; 