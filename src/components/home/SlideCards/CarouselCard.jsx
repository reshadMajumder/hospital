import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import API_URL from '../../../data/ApiData';

function CarouselCard({ title, icon, items }) {
  return (
    <div className="department-card-container">
      <div className="department-floating-card">
        <div className="department-card-header">
          {icon && (
            <div className="department-icon-wrapper">
              <img 
                src={`${API_URL}${icon}`} 
                alt={title} 
                className="department-card-icon"
                style={{ width: '35px', height: '35px' }}
              />
              <h3 className="mt-2">{title}</h3>
            </div>
          )}
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={1}
          centeredSlides={true}
          loopedSlides={items.length}
          watchSlidesProgress={true}
          preventInteractionOnTransition={true}
          className="department-swiper"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="mini-card">
                <h4 
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: '#4A4A4A',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2), 0 0 25px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s, color 0.3s',
                  }} 
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.color = '#2196F3';
                  }} 
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.color = '#4A4A4A';
                  }}
                >
                  "{item}"
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CarouselCard;