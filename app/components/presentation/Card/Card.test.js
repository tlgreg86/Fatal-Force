import React from 'react';
import { shallow } from 'enzyme';

import { Card } from './Card';

const data = [{
  _id: "597ed571bc4435bc7ebb60ee",
  name: "Richard Jones",
  age: "55",
  sex: "Male",
  race: "White",
  month: "December",
  day: "6",
  year: "2016",
  address: "3500 Ridgewood Dr",
  city: "Hutchinson",
  state: "KS",
  cause: "Gunshot",
  dept: "Hutchinson Police Department",
  armed: "Firearm",
  __v: 0
}]

describe('Card component', () => {

  it('should render victim card', () => {
    const wrapper = shallow(<Card cardData={data}/>)

    expect(wrapper.find('.card')).toHaveLength(1)
  })

})
