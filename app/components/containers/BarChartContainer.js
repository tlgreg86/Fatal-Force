import { connect } from 'react-redux';

import { BarChart } from '../presentation/VisualizationsPage/BarChart.jsx';

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps, null)(BarChart);
