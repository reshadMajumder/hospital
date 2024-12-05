import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  return (
    <Navbar bg="white" expand="lg" fixed="top" className="py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img 
            src="/images/logo.png" 
            alt="Medical Center" 
            height="40" 
            className="me-2"
          />
          <span>Medical Center</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link 
              as={Link} 
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/services"
              className={location.pathname === '/services' ? 'active' : ''}
            >
              Services
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/doctors"
              className={location.pathname === '/doctors' ? 'active' : ''}
            >
              Doctors
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/departments"
              className={location.pathname === '/departments' ? 'active' : ''}
            >
              Departments
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/staff"
              className={location.pathname === '/staff' ? 'active' : ''}
            >
              Staff
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/reviews"
              className={location.pathname === '/reviews' ? 'active' : ''}
            >
              Reviews
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about"
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About
            </Nav.Link>
            <Button 
              as={Link} 
              to="/contact"
              variant="primary" 
              className="ms-lg-3"
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