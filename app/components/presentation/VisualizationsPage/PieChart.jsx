import React from 'react';
import { VictoryPie, VictoryLegend } from 'victory';

import { filterByYear, totals,  } from '../../helpers/cleaner';

export const PieChart = (props) => {

  const { data } = props;

  const races2015 = totals(filterByYear(data, '2015'))
  const races2016 = totals(filterByYear(data, '2016'))


  const percentOfRace2015 = [
    { x: 'White', y: (races2015[2015].White/195645900)*100},
    { x: 'Black', y: (races2015[2015].Black/39257300)*100},
    { x: 'Native American', y: (races2015[2015]['Native American']/2493900)*100},
    { x: 'Asian/Pacific Islander', y: (races2015[2015]['Asian/Pacific Islander']/18629000)*100},
    { x: 'Hispanic/Latino', y: (races2015[2015]['Hispanic/Latino']/56872700)*100},
  ];

  const percentOfGeneral2016 = [
    { x: 'White', y: (races2016[2016].White/323148587)*100},
    { x: 'Black', y: (races2016[2016].Black/323148587)*100},
    { x: 'Native American', y: (races2016[2016]['Native American']/323148587)*100},
    { x: 'Asian/Pacific Islander', y: (races2016[2016]['Asian/Pacific Islander']/323148587)*100},
    { x: 'Hispanic/Latino', y: (races2016[2016]['Hispanic/Latino']/323148587)*100},
  ];

  return (
    <div className='pie-charts-wrapper'>
      <VictoryPie
        colorScale={'green'}
        labelRadius={20}
        width={175}
        style={{ labels: { fill: "white", fontSize: 2, fontWeight: "regular" } }}
        data={percentOfRace2015}
      />
      <VictoryPie
        colorScale={'red'}
        labelRadius={20}
        width={175}
        style={{ labels: { fill: "white", fontSize: 2, fontWeight: "regular" } }}
        data={percentOfGeneral2016}
      />

    </div>
  )
}
