import React from 'react';

export const Card = ({cardData}) => {

const maleOrFemale = cardData.sex === 'Female' ? 'card-female' : 'card-male'

  return (
    <div className={maleOrFemale}>
      <p>{`Name: ${cardData.name}`}</p>
      <p>{`State: ${cardData.state}`}</p>
      <p>{`Year: ${cardData.year}`}</p>
    </div>
  )
}
