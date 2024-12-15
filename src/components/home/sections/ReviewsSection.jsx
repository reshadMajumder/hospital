import { Container } from 'react-bootstrap';
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

function ReviewsSection() {
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