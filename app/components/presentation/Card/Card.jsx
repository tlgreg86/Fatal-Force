import React from 'react';

export const Card = ({cardData}) => {

  return (
    <div className='card'>
      <p>{`Name: ${cardData.name}`}</p>
      <p>{`State: ${cardData.state}`}</p>
      <p>{`Year killed: ${cardData.year}`}</p>
    </div>
  )
}
