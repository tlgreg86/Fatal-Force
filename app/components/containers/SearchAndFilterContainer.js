import { connect } from 'react-redux';

import SearchAndFilter from '../presentation/SearchAndFilter/SearchAndFilter';
import { searchData } from '../../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch: (name) => dispatch(searchData(name))
  }
}

export default connect(null, mapDispatchToProps)(SearchAndFilter)
