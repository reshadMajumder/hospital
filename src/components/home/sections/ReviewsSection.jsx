import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteRight, FaUserCircle } from 'react-icons/fa';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import API_URL from '../../../data/ApiData';
import Spinner3D from '../../common/Spinner3D';

function ReviewsSection() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/reviews/`);
        setReviews(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching reviews');
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

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

  if (loading) return <Spinner3D />;
  if (error) return <p>{error}</p>;

  return (
    <section className="home-reviews-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-description">
            Real experiences shared by our valued patients
          </p>
        </div>
      </Container>

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
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}

export default ReviewsSection; 