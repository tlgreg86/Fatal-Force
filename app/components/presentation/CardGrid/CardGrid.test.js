import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { CardGrid } from './CardGrid';
import CardGridContainer from '../../containers/CardGridContainer';

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

describe('CardGrid component', () => {

  it('should render victims page', () => {
    const wrapper = shallow(<CardGrid data={[]}
                                      searchResults={[]} />);


    expect(wrapper.find('.victims-page')).toHaveLength(1)
  })

  it('should render a loader if there is no data in state', () => {
    const wrapper = shallow(<CardGrid data={[]}
                                      searchResults={[]} />)

    expect(wrapper.find('.loading-spinner')).toHaveLength(1)
  })

  it('should load card grid contents if there is data in state', () => {
    const wrapper = shallow(<CardGrid data={data}
                                      searchResults={[]} />)

    expect(wrapper.find('.card-grid-contents')).toHaveLength(1)
  })

  it('should render searched person card when there are search results in state', () => {
    const wrapper = shallow(<CardGrid data={data}
                                      searchResults={data} />)

    expect(wrapper.find('.searched-person-wrapper')).toHaveLength(1)
  })

})
