import React from 'react';

export const Card = ({ cardData }) => {
  return (
    <div className='card'>
      <p className='card-info'>{`Name: ${cardData.name}`}</p>
      <p className='card-info'>{`Demographics: ${cardData.race} ${cardData.sex}, ${cardData.age}`}</p>
      <p className='card-info'>{`Location: ${cardData.city}, ${cardData.state}`}</p>
      <p className='card-info'>{`Date killed: ${cardData.month} ${cardData.day}, ${cardData.year}`}</p>
      <p className='card-info'>{`Weapon used: ${cardData.cause}`}</p>
      <p className='card-info'>{`Armed: ${cardData.armed}`}</p>
    </div>
  );
};
