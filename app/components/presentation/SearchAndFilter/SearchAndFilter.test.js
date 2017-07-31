import React from 'react';
import { shallow, mount } from 'enzyme';

import SearchAndFilter from './SearchAndFilter.jsx';

describe('SearchAndFilter component', () => {
  it('should render search wrapper', () => {
    const wrapper = shallow(<SearchAndFilter />);

    expect(wrapper.find('.search-wrapper')).toHaveLength(1);
  });
  it('should have searchInput in state', () => {
    const wrapper = shallow(<SearchAndFilter />);

    const expectedState = { searchInput: '' };

    expect(wrapper.state()).toEqual(expectedState);
  });
});
