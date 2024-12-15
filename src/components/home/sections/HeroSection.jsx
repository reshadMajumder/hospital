import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaSearch, FaCalendarAlt } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

function HeroSection() {
  const dnaRef = useRef(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Update date every second
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentDate(now);
      
      // Check if it's Saturday (6) or outside working hours
      const isSaturday = now.getDay() === 6;
      const hour = now.getHours();
      const isWorkingHours = hour >= 8 && hour < 20;
      
      setIsOpen(!isSaturday && isWorkingHours);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  useEffect(() => {
    const createDNAStructure = () => {
      const dnaContainer = dnaRef.current;
      if (!dnaContainer) return;

      // Clear previous content
      dnaContainer.innerHTML = '';

      // Create fewer strands for better performance
      const numberOfStrands = 2; // Reduced from 3
      
      // Use document fragment for better performance
      const fragment = document.createDocumentFragment();
      
      for(let s = 0; s < numberOfStrands; s++) {
        const strand = document.createElement('div');
        strand.className = 'dna-strand';

        // Reduce number of base pairs
        const basePairs = 20; // Increased from 15
        
        // Create base pairs and connections
        for (let i = 0; i < basePairs; i++) {
          // Left base
          const leftBase = document.createElement('div');
          leftBase.className = 'dna-base';
          leftBase.style.cssText = `
            left: ${25 + (s * 10)}%;
            top: ${(i * 5)}%;
            transform: rotate(${i * (360 / basePairs)}deg);
          `;
          
          // Right base
          const rightBase = document.createElement('div');
          rightBase.className = 'dna-base';
          rightBase.style.cssText = `
            right: ${25 + (s * 10)}%;
            top: ${(i * 5)}%;
            transform: rotate(${(i * (360 / basePairs)) + 180}deg);
          `;
          
          // Connection
          const connection = document.createElement('div');
          connection.className = 'dna-connection';
          connection.style.cssText = `
            left: 50%;
            top: ${(i * 5)}%;
            transform: rotate(${i * (360 / basePairs)}deg);
          `;

          strand.appendChild(leftBase);
          strand.appendChild(rightBase);
          strand.appendChild(connection);
        }

        fragment.appendChild(strand);
      }

      dnaContainer.appendChild(fragment);
    };

    createDNAStructure();

    // Debounce resize event for better performance
    let resizeTimeout;
    const handleResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      resizeTimeout = setTimeout(createDNAStructure, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
    };
  }, []);

  return (
    <section className="hero-section">
      {/* <div className="dna-animation" ref={dnaRef}></div> */}
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <h1 className="animate__animated animate__fadeInDown">
              Your Health - Our Priority
            </h1>
            <p className="lead animate__animated animate__fadeInUp">
            Let us help you find the care and support you need
            </p>
            <Form className="doctor-search animate__animated animate__fadeInUp">
              <Row>
                <Col>
                  <div className="position-relative">
                    <Form.Control
                      type="text"
                      placeholder="name or specialty"
                      className="shadow-sm"
                    />
                    <Button variant="primary" className="search-btn">
                      <FaSearch className="me-2" />
                    </Button>
                  </div>
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
              <div className="appointment-card position-absolute d-none d-lg-block">
                <div className="card-inner">
                  <h4 className="text-primary mb-2">Book Appointment</h4>
                  <p className="mb-0">Get instant appointment </p>
                  <p className="text-primary mt-2 fw-bold">Hotline: 1-800-HEALTH-CARE</p>
                </div>
              </div>
              
              <div className="appointment-card position-absolute d-none d-lg-block" style={{ top: 'calc(50% + 180px)' }}>
                <div className="card-inner">
                  <div className="d-flex align-items-center mb-2">
                    <FaCalendarAlt className="text-primary me-2" style={{ fontSize: '1.5rem' }} />
                    <h4 className="text-primary mb-0">Today's Date</h4>
                  </div>
                  <p className="mb-0">{formatDate(currentDate)}</p>
                  <p className={`mt-2 fw-bold ${isOpen ? 'text-success' : 'text-danger'}`}>
                    {isOpen ? 'Open Today' : 'Closed Today'}
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;