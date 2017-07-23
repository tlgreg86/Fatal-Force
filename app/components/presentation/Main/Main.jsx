import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { LandingPage } from '../LandingPage/LandingPage'
import CardGridContainer from '../../containers/CardGridContainer';
import { Visualizations } from '../Visualizations/Visualizations';

const Main = () => {

  return (
    <Router>
      <div className='app-wrapper'>
        <Route exact path='/' component={() => <LandingPage/>} />
        <Route path='/victims-list' component={() => <CardGridContainer/>} />
        <Route path='/visualizations' component={() => <Visualizations/>} />
      </div>
    </Router>
  )
}

export default Main;
