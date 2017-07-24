import React from 'react';
import { VictoryPie } from 'victory';

import { filterByYear, totals,  } from '../../helpers/cleaner';

export const PieChart = (props) => {

  const { data } = props;

  const races2015 = totals(filterByYear(data, '2015'))
  const races2016 = totals(filterByYear(data, '2016'))


  const data2015 = [
    { x: 'White', y: races2015[2015].White},
    { x: 'Black', y: races2015[2015].Black},
    { x: 'Native American', y: races2015[2015]['Native American']},
    { x: 'Asian/Pacific Islander', y: races2015[2015]['Asian/Pacific Islander']},
    { x: 'Hispanic/Latino', y: races2015[2015]['Hispanic/Latino']},
    { x: 'Arab-American', y: races2015[2015]['Arab-American']}
  ];

  const data2016 = [
    { x: 'White', y: races2016[2016].White},
    { x: 'Black', y: races2016[2016].Black},
    { x: 'Native American', y: races2016[2016]['Native American']},
    { x: 'Asian/Pacific Islander', y: races2016[2016]['Asian/Pacific Islander']},
    { x: 'Hispanic/Latino', y: races2016[2016]['Hispanic/Latino']},
    { x: 'Arab-American', y: races2016[2016]['Arab-American']}
  ];

  return (
    <div className='pie-charts-wrapper'>
      <VictoryPie
        colorScale={'green'}
        labelRadius={90}
        padAngle={3}
        style={{ labels: { fill: "white", fontSize: 5, fontWeight: "bold" } }}
        data={data2015}
      />
      <VictoryPie
        colorScale={'red'}
        labelRadius={90}
        padAngle={3}
        style={{ labels: { fill: "white", fontSize: 5, fontWeight: "bold" } }}
        data={data2016}
      />

    </div>
  )
}
