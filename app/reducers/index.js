import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { data } from './dataReducer';
import { searchResults } from './searchReducer';

const rootReducer = combineReducers({
  data,
  searchResults,
});

export default rootReducer;
