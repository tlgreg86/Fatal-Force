import React from 'react';

import { NavBar } from '../NavBar/NavBar.jsx';
import BarChartContainer from '../../containers/BarChartContainer';
import PieChartContainer from '../../containers/PieChartContainer';

export const VisualizationsPage = () => {
  return (
    <div className='vis-wrapper'>
      <NavBar />
      <div className='charts-container'>
        <BarChartContainer />
        <PieChartContainer />
      </div>
    </div>
  );
};
