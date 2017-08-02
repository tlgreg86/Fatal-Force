import { connect } from 'react-redux';

import SearchAndFilter from '../presentation/SearchAndFilter/SearchAndFilter.jsx';
import { filterData } from '../../actions';

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch: dataArray => dispatch(filterData(dataArray)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchAndFilter);
