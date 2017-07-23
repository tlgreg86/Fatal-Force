import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

import LandingPage from './presentation/LandingPage'
import CardGridContainer from './containers/CardGridContainer';
import Visualizations from './presentation/Visualizations';

class Main extends Component {

  render () {
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
}

export default Main;
