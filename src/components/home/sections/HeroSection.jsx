import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

function HeroSection() {
  const dnaRef = useRef(null);

  useEffect(() => {
    const createDNAStructure = () => {
      const dnaContainer = dnaRef.current;
      if (!dnaContainer) return;

      // Clear previous content
      dnaContainer.innerHTML = '';

      // Create multiple DNA strands
      const numberOfStrands = 3;
      
      for(let s = 0; s < numberOfStrands; s++) {
        const strand = document.createElement('div');
        strand.className = 'dna-strand';

        // Number of base pairs
        const basePairs = 25;
        
        // Create base pairs and connections
        for (let i = 0; i < basePairs; i++) {
          // Left base
          const leftBase = document.createElement('div');
          leftBase.className = 'dna-base';
          leftBase.style.left = `${25 + (s * 5)}%`;
          leftBase.style.top = `${(i * 4)}%`;
          leftBase.style.transform = `rotate(${i * (360 / basePairs)}deg)`;
          
          // Right base
          const rightBase = document.createElement('div');
          rightBase.className = 'dna-base';
          rightBase.style.right = `${25 + (s * 5)}%`;
          rightBase.style.top = `${(i * 4)}%`;
          rightBase.style.transform = `rotate(${(i * (360 / basePairs)) + 180}deg)`;
          
          // Connection
          const connection = document.createElement('div');
          connection.className = 'dna-connection';
          connection.style.left = '50%';
          connection.style.top = `${(i * 4)}%`;
          connection.style.transform = `rotate(${i * (360 / basePairs)}deg)`;

          strand.appendChild(leftBase);
          strand.appendChild(rightBase);
          strand.appendChild(connection);
        }

        dnaContainer.appendChild(strand);
      }
    };

    createDNAStructure();

    // Recreate DNA structure on window resize
    window.addEventListener('resize', createDNAStructure);
    return () => window.removeEventListener('resize', createDNAStructure);
  }, []);

  return (
    <section className="hero-section">
      <div className="dna-animation" ref={dnaRef}></div>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <h1 className="animate__animated animate__fadeInDown">
              Your Health Is Our Top Priority
            </h1>
            <p className="lead animate__animated animate__fadeInUp">
              Providing Quality Healthcare Services with Advanced Medical Technology
            </p>
            <Form className="doctor-search animate__animated animate__fadeInUp">
              <Row>
                <Col md={8} className="mb-3 mb-md-0">
                  <Form.Control
                    type="text"
                    placeholder="Search doctors by name or specialty"
                    className="shadow-sm"
                  />
                </Col>
                <Col md={4}>
                  <Button variant="primary" className="w-100 shadow-sm">
                    <FaSearch className="me-2" />
                    Search
                  </Button>
                </Col>
              </Row>
            </Form>
            <div className="d-block d-lg-none">
              <div className="appointment-card p-3 rounded">
                <h4 className="text-primary mb-2">Book Appointment</h4>
                <p className="mb-0">Get instant appointment </p>
                <p className="text-primary mt-2 fw-bold">Hotline: 1-800-HEALTH-CARE</p>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mt-4 mt-lg-0 animate__animated animate__fadeInRight">
            <div className="position-relative">
              {/* <img 
                src="/images/hero-doctor.jpg" 
                alt="Professional Doctor" 
                className="img-fluid rounded shadow-lg"
              /> */}
              <div className="appointment-card p-3 rounded position-absolute d-none d-lg-block">
                <h4 className="text-primary mb-2">Book Appointment</h4>
                <p className="mb-0">Get instant appointment </p>
                <p className="text-primary mt-2 fw-bold">Hotline: 1-800-HEALTH-CARE</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;