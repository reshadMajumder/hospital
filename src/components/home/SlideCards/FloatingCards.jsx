import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CarouselCard from './CarouselCard';
import axios from 'axios';
import API_URL from '../../../data/ApiData';

function FloatingCards() {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/card-slider/`);
        setCards(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching cards data');
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  const handleCardClick = (path) => {
    navigate(path);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="floating-cards">
      <div className="cards-row">
        {cards.map((card) => (
          <div key={card.id} onClick={() => handleCardClick(card.path)}>
            <CarouselCard
              title={card.title.replace(/([A-Z])/g, ' $1').trim()}
              items={card.items.map(item => item.title)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FloatingCards;