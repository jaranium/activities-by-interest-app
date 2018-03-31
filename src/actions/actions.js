// import actionType constants

import * as types from '../constants/actionTypes'


//write actionCreators 

export const addRest = (values) => ({
  type: types.ADD_REST,
  payload: values.restaurantName,
});
