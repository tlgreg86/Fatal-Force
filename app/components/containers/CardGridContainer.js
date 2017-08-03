import { connect } from 'react-redux';

import { CardGrid } from '../presentation/CardGrid/CardGrid.jsx';

const mapStateToProps = (state) => {
  return {
    data: state.data,
    filterResults: state.filterResults,
  };
};

export default connect(mapStateToProps, null)(CardGrid);
