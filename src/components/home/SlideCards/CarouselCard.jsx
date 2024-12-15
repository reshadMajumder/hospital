import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function CarouselCard({ title, icon, items }) {
  return (
    <div className="card-container">
      <div className="floating-card">
        <div className="card-header">
          <FontAwesomeIcon icon={icon} className="card-icon" />
          <h3>{title}</h3>
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
          className="mySwiper"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="mini-card">
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