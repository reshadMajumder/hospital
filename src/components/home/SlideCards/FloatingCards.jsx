import React from 'react';
import { useNavigate } from 'react-router-dom';
import CarouselCard from './CarouselCard';
import { services, departments, doctors } from './CardData';
import { faStethoscope, faBuildingUser, faUserDoctor } from '@fortawesome/free-solid-svg-icons';

function FloatingCards() {
  const navigate = useNavigate();

  const cards = [
    { 
      title: 'Our Services', 
      icon: faStethoscope, 
      items: services,
      path: '/services'
    },
    { 
      title: 'Our Departments', 
      icon: faBuildingUser, 
      items: departments,
      path: '/departments'
    },
    { 
      title: 'Our Doctors', 
      icon: faUserDoctor, 
      items: doctors,
      path: '/doctors'
    }
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="floating-cards">
      <div className="cards-row">
        {cards.map((card, index) => (
          <div key={index} onClick={() => handleCardClick(card.path)}>
            <CarouselCard
              title={card.title}
              icon={card.icon}
              items={card.items}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FloatingCards;