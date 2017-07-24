import React from 'react';

import { NavBar } from '../NavBar/NavBar';
import BarChartContainer from '../../containers/BarChartContainer';
import PieChartContainer from '../../containers/PieChartContainer';

export const VisualizationsPage = () => {

  return (
    <div className='vis-wrapper'>
      <NavBar />
      <BarChartContainer />
      <PieChartContainer />
    </div>
  )
}
