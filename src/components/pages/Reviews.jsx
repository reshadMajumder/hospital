import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Modal, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteRight, FaUserCircle } from 'react-icons/fa';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import API_URL from '../../data/ApiData';
import Spinner3D from '../common/Spinner3D'; // Import the spinner component

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    review: '',
    email_or_Phone: '',
    date: new Date().toISOString().split('T')[0],
    visibility: false
  });
  const [submitStatus, setSubmitStatus] = useState({ message: '', type: '' });
  const [showModal, setShowModal] = useState(false);
  const [fullReviewText, setFullReviewText] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/reviews/`);
        setReviews(response.data);
      } catch (err) {
        setError('Error fetching reviews');
      } finally {
        setLoading(false); // Ensure loading is set to false after fetching
      }
    };

    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reviewData = {
        name: formData.name,
        rating: formData.rating,
        review: formData.review,
        email_or_Phone: formData.email_or_Phone,
        date: formData.date,
        visibility: formData.visibility
      };

      console.log('Sending review data:', reviewData); // Debug log

      const response = await axios.post(`${API_URL}/api/reviews/`, reviewData);
      setSubmitStatus({
        message: 'Thank you for your review! It will be visible after moderation.',
        type: 'success'
      });
      // Reset form
      setFormData({
        name: '',
        rating: 5,
        review: '',
        email_or_Phone: '',
        date: new Date().toISOString().split('T')[0],
        visibility: false
      });
    } catch (err) {
      console.error('Error submitting review:', err.response?.data || err.message);
      setSubmitStatus({
        message: 'Error submitting review. Please try again.',
        type: 'error'
      });
    }
  };

  const handleShowModal = (reviewText) => {
    setFullReviewText(reviewText);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const formatReviewText = (text) => {
    const words = text.split(' ');
    if (words.length > 30) {
      return text; // Return full text for scrolling
    }
    return text;
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`star ${index < rating ? 'active' : ''}`}
        style={{
          color: index < rating ? '#fbbf24' : '#e5e7eb',
          marginRight: '2px'
        }}
      />
    ));
  };

  if (loading) return <Spinner3D />; // Show spinner while loading
  if (error) return <div>{error}</div>;

  return (
    <div className="reviews-page">
      <div className="reviews-hero">
        <Container>
          <div className="text-center">
            <h1 className="hero-title pt-4">What Our Patients Say About Us</h1>
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
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    <FaQuoteRight className="quote-icon" />
                    <p className="review-text">
                      {formatReviewText(review.review)}
                    </p>
                    <p className="review-date">
                      {new Date(review.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <Modal show={showModal} onHide={handleCloseModal} className="modal-3d">
                  <Modal.Header closeButton>
                    <Modal.Title>Full Review</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>{fullReviewText}</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
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
                {submitStatus.message && (
                  <div className={`alert alert-${submitStatus.type === 'success' ? 'success' : 'danger'}`}>
                    {submitStatus.message}
                  </div>
                )}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="form-floating mb-4">
                    <Form.Control
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    <label htmlFor="name">Your Name</label>
                  </Form.Group>

                  <Form.Group className="form-floating mb-4">
                    <Form.Control
                      type="text"
                      id="email_or_Phone"
                      name="email_or_Phone"
                      placeholder="Email or Phone"
                      className="form-input"
                      value={formData.email_or_Phone}
                      onChange={(e) => setFormData({...formData, email_or_Phone: e.target.value})}
                      required
                    />
                    <label htmlFor="email_or_Phone">Email or Phone</label>
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
                      value={formData.review}
                      onChange={(e) => setFormData({...formData, review: e.target.value})}
                      required
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