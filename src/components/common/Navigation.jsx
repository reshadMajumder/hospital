import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navigation() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const closeNav = () => setExpanded(false);

  return (
    <Navbar 
      bg="white" 
      expand="lg" 
      fixed="top" 
      className="py-3"
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center" onClick={closeNav}>
          <img
            src="/images/logo.png"
            alt="Medical Center image"
            height="40"
            className="me-2"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
              onClick={closeNav}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/services"
              className={location.pathname === '/services' ? 'active' : ''}
              onClick={closeNav}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/doctors"
              className={location.pathname === '/doctors' ? 'active' : ''}
              onClick={closeNav}
            >
              Doctors
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/departments"
              className={location.pathname === '/departments' ? 'active' : ''}
              onClick={closeNav}
            >
              Departments
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/staff"
              className={location.pathname === '/staff' ? 'active' : ''}
              onClick={closeNav}
            >
              Staff
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/reviews"
              className={location.pathname === '/reviews' ? 'active' : ''}
              onClick={closeNav}
            >
              Reviews
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={closeNav}
            >
              About
            </Nav.Link>
            <Button
              as={Link}
              to="/contact"
              variant="outline-primary"
              className="ms-lg-3 contact-btn"
              onClick={closeNav}
              style={{
                borderRadius: '50px',
                padding: '8px 24px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                border: '2px solid var(--primary-color)',
                backgroundColor: 'transparent',
                color: 'var(--primary-color)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--primary-color)';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'var(--primary-color)';
              }}
            >
              Contact Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;