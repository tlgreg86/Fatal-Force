import React from 'react';
import { shallow } from 'enzyme';

import VisualizationsPage from './VisualizationsPage.jsx';

describe('VisualizationsPage component', () => {
  it('should render visualizations page', () => {
    const wrapper = shallow(<VisualizationsPage />);

    expect(wrapper.find('.vis-wrapper')).toHaveLength(1);
  });
});
