import React from 'react';
import './CatCard.scss';
import { Link } from 'react-router-dom';

const CatCard = ({ card }) => {
  return (
    <Link to='/gigs?cat=design'>
      <div className='cat-card'>
        <img src={card.img} alt={card.title} />
        <span className='desc'>{card.desc}</span>
        <span className='title'>{card.title}</span>
      </div>
    </Link>
  );
};

export default CatCard;
