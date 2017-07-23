import React from 'react';
import { NavLink } from 'react-router-dom';

export const LandingPage = () => {

  return (
    <div className='landing-page'>
      <h1 className='title'>Fatal Force</h1>
      <NavLink exact to='/victims-list' activeClassName='selected'>Enter Here</NavLink>
    </div>
  )
}
