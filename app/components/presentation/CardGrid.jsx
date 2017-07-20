import React from 'react';

import Card from './Card';

const CardGrid = (props) => {
  const { data } = props;
  console.log(data);

  const dataArray = data.map( (dataObj, index) =>{
    return <Card cardData={ dataObj }
                 key={index}
            />
  })

  return (
    <div className='card-grid'>
      {dataArray}
    </div>

  )
}

export default CardGrid;
