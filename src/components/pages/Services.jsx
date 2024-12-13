import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHospital, FaStethoscope, FaUserMd, FaTooth } from 'react-icons/fa';
import ServiceSection from '../services/ServiceSection';
import ServiceHeader from '../services/ServiceHeader';
import '../../styles/services.css';

const Services = () => {
  const hospitalServices = [
    'Mount Adora Neurology',
    'Mount Adora Economy',
    'ICU,CCU,HDU',
    'State-of-art Operation Theatre',
    'Specialized Cardiology Department with avant Cardiac Catheterization Laboratory',
    'Dialysis',
    'Physiotherapy',
    'Gastro-liver Care',
    'ENT Care',
    'Burn, Trauma, and Orthopedics Care',
    'Gyne and Obs. Care'
  ];

  const diagnosticServices = [
    'Siemens (Germany) 1.5 Tesla, 48 Channel MRI and 128 Slice CT-Scan',
    'Endoscopy and Colonoscopy with Olympus Machine',
    'First time in sylhet, Dedicated Fibre Optic Laryngoscopy (FOL) Machine',
    'Video EEG, NCV,NCS, Holter Monitoring, ECHO, ETT, ECG , USG, X-Ray, Uroflowmetry etc Facility',
    'Biochemistry report with VITROS-350 and immunology report with Architect i1000',
    'Fully Autometed Apharsis Machine',
    'Sleep Study Lab for Sleep Apnea Patients'
  ];

  return (
    <div className="services-page">
      <ServiceHeader />
      <Container>
        <Row>
          <Col lg={6} className="mb-4">
            <ServiceSection 
              title="Hospital Services"
              icon="/images/hospital-icon.svg"
              services={hospitalServices}
            />
          </Col>
          <Col lg={6} className="mb-4">
            <ServiceSection 
              title="Diagnostic Services"
              icon="/images/diagnostic-icon.svg"
              services={diagnosticServices}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;