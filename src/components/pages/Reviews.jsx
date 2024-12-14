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
    <div className="reviews-section">
      <div className="reviews-bg"></div>
      <Container className="py-5 mt-4">
        <div className="text-center mb-5">
          <span className="badge bg-primary-subtle text-primary mb-3 px-3 py-2 rounded-pill">
            Patient Testimonials
          </span>
          <h2 className="display-5 fw-bold mb-3">What Our Patients Say</h2>
          <p className="text-muted lead w-75 mx-auto">
            Real experiences shared by our valued patients who trusted us with their care
          </p>
        </div>
        
        <Row className="mb-5">
          <Col>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 5,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: false,
              }}
              modules={[EffectCoverflow, Navigation, Autoplay]}
              className="reviews-swiper"
              navigation
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div className="review-card">
                    <div className="review-header">
                      <div className="avatar-wrapper">
                        <FaUserCircle className="avatar-icon" />
                      </div>
                      <div className="rating mb-2">
                        {[...Array(5)].map((_, index) => (
                          <FaStar
                            key={index}
                            className={index < review.rating ? 'star active' : 'star'}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="quote-icon">
                      <FaQuoteRight />
                    </div>
                    <p className="review-text">{review.comment}</p>
                    <div className="reviewer-info">
                      <h4>{review.name}</h4>
                      <div className="meta">
                        <span className="badge bg-primary-subtle text-primary me-2">
                          {review.role}
                        </span>
                        <span className="specialty">{review.specialty}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="review-form">
              <div className="form-header text-center mb-4">
                <h3 className="h4 fw-bold mb-2">Share Your Experience</h3>
                <p className="text-muted">Your feedback helps us improve our services</p>
              </div>
              <Form onSubmit={(e) => e.preventDefault()}>
                <div className="form-floating mb-4">
                  <Form.Control
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="form-control-lg border-0 bg-light"
                  />
                  <label htmlFor="name">Your Name</label>
                </div>

                <div className="rating-section text-center mb-4">
                  <p className="text-muted mb-3">How would you rate your experience?</p>
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

                <div className="form-floating mb-4">
                  <Form.Control
                    as="textarea"
                    id="comment"
                    placeholder="Your Experience"
                    className="form-control-lg border-0 bg-light"
                    style={{ height: '120px' }}
                  />
                  <label htmlFor="comment">Your Experience</label>
                </div>

                <div className="text-center">
                  <Button 
                    variant="primary" 
                    type="submit" 
                    size="lg"
                    className="rounded-pill px-5 py-3 fw-semibold"
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
  );
}

export default Reviews;