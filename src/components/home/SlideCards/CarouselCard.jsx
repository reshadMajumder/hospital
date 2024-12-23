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
          <h3>{title}</h3>
          {icon && (
            <img 
              src={`${API_URL}${icon}`} 
              alt={title} 
              className="department-card-icon"
              style={{ width: '35px', height: '35px', marginLeft: '8px' }}
            />
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
              <div 
                className="mini-card"
                style={{
                  // backgroundImage: `url(${API_URL}${icon})`,

                }}
              >
                <h4>{item}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CarouselCard;