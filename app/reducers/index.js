import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { data } from './dataReducer';
import { filterResults } from './filterReducer';

const rootReducer = combineReducers({
  data,
  filterResults,
});

export default rootReducer;
