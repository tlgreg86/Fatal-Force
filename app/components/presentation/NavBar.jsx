import React, { Component } from 'react';
import NavLink from 'react-router-dom';


class NavBar extends Component {

  render () {
    return (
      <div className='nav-bar'>
        <h1 className='title-nav-bar'>Fatal Force</h1>
        <NavLink exact to='/' activeClassName='selected'>Home</NavLink>
        <NavLink to='/victims-list' activeClassName='selected'>Victims List</NavLink>
        <NavLink to='/visualizations' activeClassName='selected'>Visualizations</NavLink>
      </div>
    )
  }
}

export default NavBar
