import React from 'react';
import './style.css';

function Card({ card }) {
  const { name, image, description, skill, level } = card;
  return (
    <div className='card-container'>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <p>{description}</p>
      <h3>{`Habilidade: ${skill}`}</h3>
      <h3>{`Level: ${level}`}</h3>
    </div>
  );
}

export default Card;
