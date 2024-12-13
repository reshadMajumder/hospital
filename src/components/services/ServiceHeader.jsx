import React from 'react';
import { Container } from 'react-bootstrap';

const ServiceHeader = () => {
  return (
    <div className="service-header py-4 mb-5">
      <Container>
        <h1 className="text-center service-title">Our Services </h1>
      </Container>
    </div>
  );
};

export default ServiceHeader;