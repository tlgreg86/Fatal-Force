import React from 'react';
import { VictoryBar,
         VictoryChart,
         VictoryAxis,
         VictoryTheme,
         VictoryStack,
         VictoryContainer,
         VictoryLegend,
       } from 'victory';

import { filterByYear, totals } from '../../helpers/cleaner';

export const BarChart = ({ data }) => {
  console.log(data);
  const races2015 = totals(filterByYear(data, '2015'));
  const races2016 = totals(filterByYear(data, '2016'));


  const percentOfRace = [
    { race: 'White', totals: (races2015[2015].White / 195645900) * 100 },
    { race: 'Black', totals: (races2015[2015].Black / 39257300) * 100 },
    { race: 'Native American', totals: (races2015[2015]['Native American'] / 2493900) * 100 },
    { race: 'Asian/Pacific Islander', totals: (races2015[2015]['Asian/Pacific Islander'] / 18629000) * 100 },
    { race: 'Hispanic/Latino', totals: (races2015[2015]['Hispanic/Latino'] / 56872700) * 100 },
  ];


  const percentOfGeneral = [
    { race: 'White', totals: (races2016[2016].White / 318868500) * 100 },
    { race: 'Black', totals: (races2016[2016].Black / 318868500) * 100 },
    { race: 'Native American', totals: (races2016[2016]['Native American'] / 318868500) * 100 },
    { race: 'Asian/Pacific Islander', totals: (races2016[2016]['Asian/Pacific Islander'] / 318868500) * 100 },
    { race: 'Hispanic/Latino', totals: (races2016[2016]['Hispanic/Latino'] / 318868500) * 100 },
  ];

  return (
      <VictoryChart
        containerComponent={<VictoryContainer className='bar-chart'
                                              responsive={false}
                           />}


        height={500}
        width={750}
        responsive={false}
        domainPadding={40}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={[
            'White',
            'Black',
            'Native American',
            'Asian/Pacific Islander',
            'Hispanic/Latino',
          ]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={x => (`${x}`)}
        />
      <VictoryStack colorScale={'cool'} >
          <VictoryBar
            style={{ parent: { fontSize: 25 } }}
            data={percentOfRace}
            x='race'
            y='totals'
          />
          <VictoryBar
            data={percentOfGeneral}
            x='race'
            y='totals'
          />
        </VictoryStack>
        <VictoryLegend
          style={{ labels: { fontSize: 25 } }}
          colorScale={'cool'}
          data={[
            { name: '% of races population ', symbol: { type: 'square' } },
            { name: '% of general population', symbol: { type: 'square' } },
          ]}
          x={375}
          y={50}
        />
      </VictoryChart>
  );
};
