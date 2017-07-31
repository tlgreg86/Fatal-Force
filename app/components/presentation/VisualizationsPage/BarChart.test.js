import React from 'react';
import { shallow, mount } from 'enzyme';

import { BarChart } from './BarChart.jsx';
import { dataStub } from '../../helpers/dataStub';

const data = [{
  _id: '597ed571bc4435bc7ebb60ee',
  name: 'Richard Jones',
  age: '55',
  sex: 'Male',
  race: 'White',
  month: 'December',
  day: '6',
  year: '2016',
  address: '3500 Ridgewood Dr',
  city: 'Hutchinson',
  state: 'KS',
  cause: 'Gunshot',
  dept: 'Hutchinson Police Department',
  armed: 'Firearm',
  __v: 0,
}];

describe('BarChart component', () => {
  it('should render bar chart', () => {
    const wrapper = shallow(<BarChart data={data}/>);

    expect(wrapper.find('.bar-chart')).toHaveLength(1);
  });
});
