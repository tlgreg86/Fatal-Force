import React from 'react';

import { NavBar } from '../NavBar/NavBar';
import BarChartContainer from '../../containers/BarChartContainer';

export const VisualizationsPage = () => {

  return (
    <div className='vis-wrapper'>
      <NavBar />
      <BarChartContainer />
    </div>
  )
}
