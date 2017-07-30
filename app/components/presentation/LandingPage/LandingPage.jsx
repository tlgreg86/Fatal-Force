import React from 'react';
import { NavLink } from 'react-router-dom';

export const LandingPage = () => {

  return (
    <div className='landing-page'>
      <h1 className='title'>
        <NavLink exact to='/victims-list' className='enter-here'>
          FATAL FORCE
        </NavLink>
      </h1>
    </div>
  )
}
