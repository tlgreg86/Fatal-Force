import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { data } from './dataReducer';

const rootReducer = combineReducers({
  data
})

export default rootReducer;
