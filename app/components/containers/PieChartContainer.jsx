import { connect } from 'react-redux';

import { PieChart } from '../presentation/VisualizationsPage/PieChart';

const mapStateToProps = (state) => {
    return {
    data: state.data
  }
}

export default connect(mapStateToProps, null)(PieChart)
