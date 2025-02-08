import React, { useState, useEffect } from 'react';
import { FaPhone } from 'react-icons/fa';
import axios from 'axios';
import API_URL from '../../../data/ApiData';
import Spinner3D from '../../common/Spinner3D';

function StatusCards() {
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
                <FaPhone /> 
                <span onClick={() => window.location.href = `tel:${hospitalInfo?.phone}`} className="clickable"> {hospitalInfo?.phone || 'Loading...'}</span>
              </p>
              <p className="text-primary mt-2 fw-bold">
                <FaPhone /> 
                <span onClick={() => window.location.href = `tel:${hospitalInfo?.phone_Two}`} className="clickable"> {hospitalInfo?.phone_Two || 'Loading...'}</span>
              </p>
            </div>
          </div>
          
          <div className="status-card">
            <div className="card-inner text-center">
              <h4 className="text-primary mb-2">We Serve</h4>
              <img src="/images/open.png" alt="Open" className="img-fluid" style={{ height: '50px' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatusCards; 