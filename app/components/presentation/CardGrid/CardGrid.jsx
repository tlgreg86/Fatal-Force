import React from 'react';

import { NavBar } from '../NavBar/NavBar.jsx';
import { Card } from '../Card/Card.jsx';
import SearchAndFilterContainer from '../../containers/SearchAndFilterContainer';

export const CardGrid = ({ data, filterResults }) => {
  const loadingDiv = <div className='loading-spinner'></div>;

  const dataOrFilter = !filterResults.length ? data : filterResults;

  const dataByYear = year => dataOrFilter.filter((dataObj) => {
    return dataObj.year === year;
  });

  const dataArray = year => dataByYear(year).map((dataObj, index) => {
    return <Card cardData={ dataObj }
                 key={index}
           />;
  });

  const dataDiv = <div className='card-grid-contents'>
                    <h1 className='year'>2015 Total = {dataArray('2015').length}</h1>
                    <div className='data'>{dataArray('2015')}</div>
                    <h1 className='year'>2016 Total = {dataArray('2016').length}</h1>
                    <div className='data'>{dataArray('2016')}</div>
                  </div>;

  return (
    <div className='victims-page'>
      <NavBar />
      <div className='search-and-grid-wrapper'>
        <SearchAndFilterContainer />
        <div className='card-grid'>
          {!data.length ? loadingDiv : dataDiv}
        </div>
      </div>
    </div>

  )
}
