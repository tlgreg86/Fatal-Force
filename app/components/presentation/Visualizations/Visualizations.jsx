import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';

import { NavBar } from '../NavBar/NavBar';
import { filterByYear, totals } from '../../helpers/cleaner';



const data2015 = [
  {race: 'White', totals: 18000},
  {race: 'Black', totals: 13250},
  {race: 'Native American', totals: 15000},
  {race: 'Asian/Pacific Islander', totals: 12000},
  {race: 'Hispanic/Latino', totals: 12000},
  {race: 'Arab-American', totals: 12000}
];

const data2016 = [
  {race: 'White', totals: 18000},
  {race: 'Black', totals: 13250},
  {race: 'Native American', totals: 15000},
  {race: 'Asian/Pacific Islander', totals: 15000},
  {race: 'Hispanic/Latino', totals: 12000},
  {race: 'Arab-American', totals: 12000}
];

export const Visualizations = () => {

  return (
    <div className='vis-wrapper'>
      <NavBar />
      <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5, 6]}
          tickFormat={[
                       "White",
                       "Black",
                       "Native American",
                       "Asian/Pacific Islander",
                       "Hispanic/Latino",
                       "Arab-American"
                     ]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
      <VictoryStack colorScale={'blue'}>
          <VictoryBar
            data={data2015}
            x='race'
            y='totals'
          />
          <VictoryBar
            data={data2016}
            x='race'
            y='totals'
          />
        </VictoryStack>
      </VictoryChart>
    </div>
  )
}
