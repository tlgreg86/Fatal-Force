import { connect } from 'react-redux';

import { CardGrid } from '../presentation/CardGrid/CardGrid.jsx';
import { filterResults } from '../../reducers';

const mapStateToProps = (state) => {
  return {
    data: state.data,
    filterResults: state.filterResults,
  };
};

export default connect(mapStateToProps, null)(CardGrid);
