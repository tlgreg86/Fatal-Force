import React from 'react';
import { VictoryBar,
         VictoryChart,
         VictoryAxis,
         VictoryTheme,
         VictoryStack,
         VictoryContainer,
         VictoryLegend
       } from 'victory';

import { filterByYear, totals } from '../../helpers/cleaner';

export const BarChart = (props) => {

  const { data } = props;

  const races2015 = totals(filterByYear(data, '2015'))
  const races2016 = totals(filterByYear(data, '2016'))


  const data2015 = [
    {race: 'White', totals: races2015[2015].White},
    {race: 'Black', totals: races2015[2015].Black},
    {race: 'Native American', totals: races2015[2015]['Native American']},
    {race: 'Asian/Pacific Islander', totals: races2015[2015]['Asian/Pacific Islander']},
    {race: 'Hispanic/Latino', totals: races2015[2015]['Hispanic/Latino']},
    {race: 'Arab-American', totals: races2015[2015]['Arab-American']}
  ];
  const data2016 = [
    {race: 'White', totals: races2016[2016].White},
    {race: 'Black', totals: races2016[2016].Black},
    {race: 'Native American', totals: races2016[2016]['Native American']},
    {race: 'Asian/Pacific Islander', totals: races2016[2016]['Asian/Pacific Islander']},
    {race: 'Hispanic/Latino', totals: races2016[2016]['Hispanic/Latino']},
    {race: 'Arab-American', totals: races2016[2016]['Arab-American']}
  ];

  return (
    <div>
      <VictoryChart
        containerComponent={<VictoryContainer className='bar-chart'
                                              responsive={false}
                           />}


        height={700}
        width={700}
        responsive={false}
        domainPadding={40}
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
          tickFormat={(x) => (`${x}`)}
        />
      <VictoryStack colorScale={'cool'}>
          <VictoryBar
            style={{
              labels: { fontSize: 15 }
            }}
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
        <VictoryLegend
          style={{
            labels: { fontSize: 15 }
          }}
          colorScale={'cool'}
          data={[
            {name: '2015', symbol: { type: 'square'}},
            {name: '2016', symbol: { type: 'square'}},
          ]}
          x={375}
          y={50}
        />
      </VictoryChart>
    </div>

  )
}
