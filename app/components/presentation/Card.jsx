import React from 'react';

const Card = ({cardData}) => {

  return (
    <div className='card'>
      <p>{`Name: ${cardData.name}`}</p>
      <p>{`State: ${cardData.state}`}</p>
      <p>{`Year: ${cardData.year}`}</p>
    </div>
  )
}

export default Card;
