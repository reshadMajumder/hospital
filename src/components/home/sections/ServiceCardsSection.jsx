import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { 
  FaStethoscope, FaHospital, FaUserMd, FaAmbulance, 
  FaHeartbeat, FaBrain, FaXRay, FaWheelchair, FaFlask 
} from 'react-icons/fa';
import 'swiper/css';

const cardData = [
  {
    title: "Our Services",
    icon: <FaStethoscope />,
    cards: [
      {
        icon: <FaAmbulance />,
        title: "Emergency Care",
        color: "#4CAF50"
      },
      {
        icon: <FaXRay />,
        title: "Diagnostics",
        color: "#2196F3"
      },
      {
        icon: <FaFlask />,
        title: "Lab Services",
        color: "#9C27B0"
      }
    ],
    color: "var(--accent-color)"
  },
  {
    title: "Our Departments",
    icon: <FaHospital />,
    cards: [
      {
        icon: <FaHeartbeat />,
        title: "Cardiology",
        color: "#E91E63"
      },
      {
        icon: <FaBrain />,
        title: "Neurology",
        color: "#FF9800"
      },
      {
        icon: <FaWheelchair />,
        title: "Orthopedics",
        color: "#607D8B"
      }
    ],
    color: "var(--secondary-color)"
  },
  {
    title: "Our Doctors",
    icon: <FaUserMd />,
    cards: [
      {
        icon: <FaStethoscope />,
        title: "Specialists",
        color: "#009688"
      },
      {
        icon: <FaUserMd />,
        title: "Surgeons",
        color: "#673AB7"
      },
      {
        icon: <FaHeartbeat />,
        title: "Physicians",
        color: "#FF5722"
      }
    ],
    color: "#2cb3dc"
  }
];

function ServiceCardsSection() {
  return (
    <section className="service-cards-section">
      <div className="container py-5">
        <div className="row g-4">
          {cardData.map((card, index) => (
            <div key={index} className="col-md-4">
              <div className="service-card">
                <div className="card-header" style={{ background: card.color }}>
                  <span className="card-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                </div>
                <div className="card-carousel">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="service-swiper"
                  >
                    {card.cards.map((item, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="mini-card" style={{ background: item.color }}>
                          <div className="mini-card-icon" style={{ color: 'white' }}>
                            {item.icon}
                          </div>
                          <h4 style={{ color: 'white' }}>{item.title}</h4>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCardsSection; 