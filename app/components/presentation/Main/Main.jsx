import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { LandingPage } from '../LandingPage/LandingPage'
import CardGridContainer from '../../containers/CardGridContainer';
import { VisualizationsPage } from '../VisualizationsPage/VisualizationsPage';

const Main = () => {

  return (
    <Router>
      <div className='app-wrapper'>
        <Route exact path='/' component={() => <LandingPage/>} />
        <Route path='/victims-list' component={() => <CardGridContainer/>} />
        <Route path='/visualizations' component={() => <VisualizationsPage/>} />
      </div>
    </Router>
  )
}

export default Main;
