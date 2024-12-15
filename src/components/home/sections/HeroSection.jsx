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

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `
      perspective(1000px)
      translateY(-50%)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.02, 1.02, 1.02)
    `;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'translateY(-50%)';
  };

  return (
    <section className="hero-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8} md={10}>
            <h1 className="animate__animated animate__fadeInDown mb-2">
              Your Health - Our Priority
            </h1>
            <p className="lead animate__animated animate__fadeInUp mb-3">
              Let us help you find the care and support you need
            </p>
            <Form className="doctor-search animate__animated animate__fadeInUp">
              <Row className="justify-content-center">
                <Col lg={8} md={10}>
                  <div className="position-relative">
                    <Form.Control
                      type="text"
                      placeholder="Search by doctor name or specialty"
                      className="shadow-sm search-input"
                    />
                    <Button variant="primary" className="search-btn">
                      <FaSearch className="me-2" />
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;