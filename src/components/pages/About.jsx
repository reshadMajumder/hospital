import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHospital, FaUserMd, FaAward, FaHandHoldingMedical } from 'react-icons/fa';

function About() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      url: 'https://th.bing.com/th/id/OIP.LQiogyij9jU1XfeUFrm9TQHaEL?rs=1&pid=ImgDetMain',
      title: 'State-of-the-art Facilities'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Japanese_Red_Cross_Nagoya_Daini_hospital.JPG',
      title: 'Modern Equipment'
    },
    {
      url: '/images/about/hospital-3.jpg',
      title: 'Expert Medical Team'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const stats = [
    {
      icon: <FaHospital />,
      count: "25+",
      label: "Years of Excellence",
      description: "Serving the community since 1995"
    },
    {
      icon: <FaUserMd />,
      count: "150+",
      label: "Expert Doctors",
      description: "Specialized medical professionals"
    },
    {
      icon: <FaAward />,
      count: "50+",
      label: "Awards",
      description: "Recognition for excellence"
    },
    {
      icon: <FaHandHoldingMedical />,
      count: "100K+",
      label: "Patients Served",
      description: "Trust and satisfaction"
    }
  ];

  return (
    <div className="about-section">
      <div className="about-hero">
        <Container>
          <Row className="align-items-center min-vh-50">
            <Col lg={6}>
              <span className="badge bg-primary-subtle text-primary mb-3 px-3 py-2 rounded-pill">
                About Us
              </span>
              <h1 className="display-4 fw-bold mb-4">
                Leading the Way in Medical Excellence
              </h1>
              <p className="lead text-secondary mb-4">
                Providing exceptional healthcare services since 1995, Medical Center has been at the forefront of medical excellence and patient care.
              </p>
            </Col>
          </Row>
        </Container>
        <div className="slideshow-container">
          <div className="slideshow-wrapper">
            {images.map((image, index) => (
              <div
                key={index}
                className={`slide ${index === currentImage ? 'active' : ''}`}
                style={{ backgroundImage: `url(${image.url})` }}
              >
                <div className="slide-content">
                  <h3>{image.title}</h3>
                </div>
              </div>
            ))}
            <div className="slide-indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentImage ? 'active' : ''}`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Container className="py-5">
        <Row className="g-4 mb-5">
          {stats.map((stat, index) => (
            <Col md={6} lg={3} key={index}>
              <div className="stat-card text-center p-4 rounded-4 h-100">
                <div className="stat-icon mb-3">
                  {stat.icon}
                </div>
                <h2 className="stat-count mb-2">{stat.count}</h2>
                <h3 className="stat-label h5 mb-2">{stat.label}</h3>
                <p className="stat-description text-muted mb-0">{stat.description}</p>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className="about-content pe-lg-5">
              <h2 className="h1 mb-4">Our Commitment to Excellence</h2>
              <p className="lead mb-4">
                Our state-of-the-art facilities, combined with our team of highly qualified medical professionals, ensure that patients receive the best possible care using the latest medical technologies and treatments.
              </p>
              <div className="commitment-list">
                <div className="commitment-item d-flex align-items-start mb-4">
                  <div className="commitment-icon me-3">
                    <div className="icon-circle"></div>
                  </div>
                  <div>
                    <h3 className="h5 mb-2">Excellence in Patient Care</h3>
                    <p className="text-muted mb-0">Delivering personalized care with compassion and expertise.</p>
                  </div>
                </div>
                <div className="commitment-item d-flex align-items-start mb-4">
                  <div className="commitment-icon me-3">
                    <div className="icon-circle"></div>
                  </div>
                  <div>
                    <h3 className="h5 mb-2">Medical Research & Education</h3>
                    <p className="text-muted mb-0">Advancing healthcare through continuous research and learning.</p>
                  </div>
                </div>
                <div className="commitment-item d-flex align-items-start">
                  <div className="commitment-icon me-3">
                    <div className="icon-circle"></div>
                  </div>
                  <div>
                    <h3 className="h5 mb-2">Community Wellness</h3>
                    <p className="text-muted mb-0">Promoting health and well-being in our community.</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-image-wrapper">
              <img 
                src="/images/about/hospital.jpg" 
                alt="Medical Center Building" 
                className="img-fluid rounded-4 shadow-lg"
              />
              <div className="experience-badge">
                <span className="h2 mb-0">25+</span>
                <span className="text-sm">Years of Excellence</span>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 pt-5 g-4">
          <Col md={4}>
            <div className="vision-card text-center p-4 rounded-4 h-100">
              <div className="vision-icon mb-3">
                <FaHandHoldingMedical className="display-4 text-primary" />
              </div>
              <h3 className="h4 mb-3 vision-title animate__animated animate__fadeInDown">Our Mission</h3>
              <p className="mb-0 vision-text animate__animated animate__fadeIn animate__delay-1s">
                To provide exceptional healthcare services while maintaining the highest standards of medical practice and patient care.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="vision-card text-center p-4 rounded-4 h-100">
              <div className="vision-icon mb-3">
                <FaHospital className="display-4 text-primary" />
              </div>
              <h3 className="h4 mb-3 vision-title animate__animated animate__fadeInDown">Our Vision</h3>
              <p className="mb-0 vision-text animate__animated animate__fadeIn animate__delay-1s">
                To be the leading healthcare provider, recognized for excellence in medical services and patient satisfaction.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="vision-card text-center p-4 rounded-4 h-100">
              <div className="vision-icon mb-3">
                <FaAward className="display-4 text-primary" />
              </div>
              <h3 className="h4 mb-3 vision-title animate__animated animate__fadeInDown">Our Values</h3>
              <p className="mb-0 vision-text animate__animated animate__fadeIn animate__delay-1s">
                Integrity, compassion, excellence, and innovation in everything we do to serve our patients and community.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;