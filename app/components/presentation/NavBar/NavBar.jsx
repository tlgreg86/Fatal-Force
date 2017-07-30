import React from 'react';
import { NavLink } from 'react-router-dom';


export const NavBar = () => {

  return (
    <div className='nav-bar'>
      <NavLink exact to='/' className='title-nav-bar' activeClassName='selected'>FATAL FORCE</NavLink>
      <div className='links-wrapper'>
        <div className='victims-list-link'>
          <NavLink to='/victims-list' className='nav-bar-link' activeClassName='selected'>Victims List</NavLink>
        </div>
        <div className='vis-link'>
          <NavLink to='/visualizations' className='nav-bar-link' activeClassName='selected'>Visualizations</NavLink>
        </div>
      </div>
    </div>
  )
}
