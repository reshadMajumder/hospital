import React from 'react';

const ServiceSection = ({ title, icon, services }) => {
  return (
    <div className="service-section mb-5">
      <div className="d-flex align-items-center mb-4">
        <img 
          src={icon} 
          alt={title} 
          className="service-icon me-3"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/default-service-icon.svg';
          }}
        />
        <h2 className="service-section-title mb-0">{title}</h2>
      </div>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <span className="check-icon">✓</span>
            <span className="service-text">{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;