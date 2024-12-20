import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteRight, FaUserCircle } from 'react-icons/fa';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

function ReviewsSection() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/reviews/');
        const formattedReviews = response.data.map(review => ({
          id: review.id,
          name: review.name,
          rating: review.rating,
          comment: review.review,
        }));
        setReviews(formattedReviews);
        setLoading(false);
      } catch (err) {
        setError('Error fetching reviews');
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <p>Loading reviews...</p>;
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
    </section>
  );
}

export default ReviewsSection; 