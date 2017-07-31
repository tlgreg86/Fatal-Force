import React from 'react';
import { NavLink } from 'react-router-dom';
import { shallow } from 'enzyme';

import { NavBar } from './NavBar';

describe('NavBar component', () => {

  it('should render the nav bar with 3 NavLinks', () => {
    const wrapper = shallow(<NavBar />);

    expect(wrapper.find('.nav-bar')).toHaveLength(1)
    expect(wrapper.find('NavLink')).toHaveLength(3)
  })

})
