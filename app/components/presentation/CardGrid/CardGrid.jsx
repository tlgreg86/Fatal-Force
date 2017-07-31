import React from 'react';

import { NavBar } from '../NavBar/NavBar';
import { Card } from '../Card/Card';
import SearchAndFilterContainer from '../../containers/SearchAndFilterContainer';

export const CardGrid = ({ data, searchResults }) => {

  const loadingDiv = <div className='loading-spinner'></div>

  const dataByYear = (year) => data.filter( (dataObj, index) => {
    return dataObj.year === year
  })

  const dataArray = (year) => dataByYear(year).map( (dataObj, index) =>{
    return <Card cardData={ dataObj }
                 key={index}
           />
  })

  const dataDiv = <div className='card-grid-contents'>
                    <h1 className='year'>2015 Total = {dataArray('2015').length}</h1>
                    <div className='data'>{dataArray('2015')}</div>
                    <h1 className='year'>2016 Total = {dataArray('2016').length}</h1>
                    <div className='data'>{dataArray('2016')}</div>
                  </div>

  const searchedPerson =  searchResults.map( (person, index) => {
    return  <div className='searched-person-wrapper' key={index}>
              <div className='searched-person-card'>
                <h2>{`Name: ${person.name}`}</h2>
                <p>{`Demographics: ${person.race} ${person.sex}, ${person.age}`}</p>
                <p>{`Year killed: ${person.year}`}</p>
                <div>
                  <h3>{`Location`}</h3>
                  <p>{`${person.address}`}</p>
                  <p>{`${person.city}, ${person.state}`}</p>
                </div>
              </div>
            </div>
  })

  const dataOrSearch = !searchResults.length ? dataDiv : searchedPerson;

  return (
    <div className='victims-page'>
      <NavBar />
      <div className='search-and-grid-wrapper'>
        <SearchAndFilterContainer />
        <div className='card-grid'>
          {!data.length ? loadingDiv : dataOrSearch}
        </div>
      </div>
    </div>

  )
}
