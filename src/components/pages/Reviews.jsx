import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteRight, FaUserCircle } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment: "Exceptional care and attention to detail. The medical staff's professionalism and dedication made my experience remarkable.",
    role: "Patient",
    specialty: "Cardiology Department"
  },
  {
    id: 2,
    name: "Mary Smith",
    rating: 5,
    comment: "State-of-the-art facilities combined with compassionate care. The entire team goes above and beyond expectations.",
    role: "Regular Patient",
    specialty: "Orthopedics"
  },
  {
    id: 3,
    name: "David Wilson",
    rating: 5,
    comment: "Outstanding medical expertise and patient care. The staff's commitment to excellence is truly commendable.",
    role: "New Patient",
    specialty: "General Medicine"
  }
];

function Reviews() {
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  return (
    <div className="reviews-page">
      <div className="reviews-hero">
        <Container>
          <div className="text-center">
            <h1 className="hero-title">What Our Patients Say About Us</h1>
            <p className="hero-subtitle">
              Real experiences shared by our valued patients who trusted us with their care
            </p>
          </div>
        </Container>
      </div>

      <div className="reviews-carousel-section">
        <Container fluid className="p-0">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            initialSlide={1}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="reviews-swiper"
            navigation
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="review-card">
                  <div className="review-card-inner">
                    <div className="review-header">
                      <div className="avatar-container">
                        <FaUserCircle className="user-icon" />
                      </div>
                      <h4>{review.name}</h4>
                      <div className="rating">
                        {[...Array(5)].map((_, index) => (
                          <FaStar
                            key={index}
                            className={index < review.rating ? 'star active' : 'star'}
                          />
                        ))}
                      </div>
                    </div>
                    <FaQuoteRight className="quote-icon" />
                    <p className="review-text">{review.comment}</p>
                   
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>

      <div className="share-experience-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="form-wrapper">
                <div className="form-header text-center">
                  <h2>Your Experience Matters</h2>
                  <p>Help us improve our services by sharing your feedback</p>
                </div>
                <Form onSubmit={(e) => e.preventDefault()}>
                  <Form.Group className="form-floating mb-4">
                    <Form.Control
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className="form-input"
                    />
                    <label htmlFor="name">Your Name</label>
                  </Form.Group>

                  <div className="rating-section text-center mb-4">
                    <p className="rating-label">Rate your experience</p>
                    <div className="rating-input">
                      {[5,4,3,2,1].map(num => (
                        <button
                          key={num}
                          type="button"
                          className={`rating-btn ${formData.rating >= num ? 'active' : ''}`}
                          onClick={() => setFormData({...formData, rating: num})}
                        >
                          <FaStar />
                        </button>
                      ))}
                    </div>
                  </div>

                  <Form.Group className="form-floating mb-4">
                    <Form.Control
                      as="textarea"
                      id="experience"
                      placeholder="Share your experience"
                      className="form-input"
                      style={{ height: '120px' }}
                    />
                    <label htmlFor="experience">Share your experience</label>
                  </Form.Group>

                  <div className="text-center">
                    <Button 
                      type="submit"
                      className="submit-button"
                    >
                      Submit Review
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Reviews;