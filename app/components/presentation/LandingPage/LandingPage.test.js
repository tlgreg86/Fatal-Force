import React from 'react';
import { shallow } from 'enzyme'

import { LandingPage } from './LandingPage';

describe('LandingPage component', () => {

  it('should render a landing page with a link to the main site', () => {
    const wrapper = shallow(<LandingPage />);

    expect(wrapper.find('.landing-page')).toHaveLength(1)
    expect(wrapper.find('NavLink')).toHaveLength(1)
  })

})
