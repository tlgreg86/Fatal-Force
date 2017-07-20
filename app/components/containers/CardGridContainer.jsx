import { connect } from 'react-redux';

import CardGrid from '../presentation/CardGrid';
import { loadData } from '../../actions';

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadData: () => dispatch(loadData)
//   }
// }

export default connect(mapStateToProps, null)(CardGrid)
