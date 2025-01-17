import React from 'react';
import { useNavigate } from 'react-router-dom';
import CarouselCard from './CarouselCard';

function FloatingCards() {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      title: 'Our Services',
      icon: '/images/service.png',
      path: '/services',
      items: ['Gastric Problems', 'Constipation', 'Ulcers', 'Loss of Appetite', 'Nausea', 'Vomiting', 'Stroke and Paralysis', 'Headaches', 'Dizziness', 'Migraine', 'Sinusitis', 'Facial Palsy', 'Brain Hemorrhage', 'Malnutrition', 'Jaundice', 'Heartburn', 'Hepatitis', 'Fatty Liver', 'Liver Cirrhosis', 'Anemia'],
    },
    {
      id: 2,
      title: 'Departments',
      icon: '/images/departments.png',
      path: '/departments',
      items: ['Cardiology', 'Obstetrics & Gynecology', 'General Medicine', 'Neuromedicine', 'General Surgery', 'Gastroenterology'],
    },
    {
      id: 3,
      title: 'Doctors',
      icon: '/images/doctor.png',
      path: '/doctors',
      items: [
        'Dr. Abdullah Al Harun',
        'Dr. Md. Abdur Rakib',
        'Dr. Aklima Taheri (Koli)',
        'Dr. J.M. Rayhan Kabir Shuvo',
        'Dr. Arundhati Modak',
        'Dr. S.K. Ghosh',
        'Dr. Md. Arshed Ali',
        'Dr. Bulbul Ahmmed',
        'Dr. Jannatul Ferdous',
        'Dr. Md. Sirajul Islam',
        'Dr. Ahmudul Bari Chowdhury Shafi',
        'Dr. Sheikh Abdullah Al-Mamun',
        'Dr. Md. Samiul Hossain'
      ],
    },
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="floating-cards text-center">
      <div className="cards-row">
        {cards.map((card) => (
          <div key={card.id} onClick={() => handleCardClick(card.path)}>
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