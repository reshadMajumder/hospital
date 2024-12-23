import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
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
              <h3 className="mt-2" style={{ 
                color: '#000000',
                fontWeight: '600',
                fontSize: '1.1rem',
                textShadow: 'none'
              }}>
                {title}
              </h3>
            </div>
          )}
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
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
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.color = '#2196F3';
                  }} 
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.color = '#000000';
                  }}
                >
                  {item}
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