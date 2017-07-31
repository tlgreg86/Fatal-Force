import { connect } from 'react-redux';

import { CardGrid } from '../presentation/CardGrid/CardGrid';
import { searchData } from '../../actions'

const mapStateToProps = (state) => {
    return {
    data: state.data,
    searchResults: state.searchResults
  }
}

const mapDispatchToProps = (dispatch) => {
  return { handleSearch: (name) => dispatch(searchData(name)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardGrid)
