// the file that combines reducers;
import { combineReducers } from 'redux';
// import * as types from '../constants/actionTypes';
// import all reducers here
import profileReducer from './profileReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  profile: profileReducer,
});

// make the combined reducers available for import
export default reducers;