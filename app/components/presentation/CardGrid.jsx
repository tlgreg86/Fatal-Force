import React from 'react';

import { NavBar } from './NavBar';
import Card from './Card'

const CardGrid = (props) => {
  const { data } = props;

  const loadingDiv = <div className='loading-spinner'></div>

  const dataArray = data.map( (dataObj, index) =>{
    return <Card cardData={ dataObj }
                 key={index}
            />
  })

  return (
    <div className='victims-page'>
      <NavBar />
      <div className='card-grid'>
        {!data.length ? loadingDiv : dataArray}
      </div>
    </div>

  )
}

export default CardGrid;
