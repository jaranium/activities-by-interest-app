//reducer for restuarant data
import * as types from '../constants/actionTypes';

const initialState = {
    email: 'codysmith@gmail.com',
    password: 'banana',
    username: 'apples',
    name: 'Cody',
    interests: ['', '', ''],
    events: [{name: 'wine tasting'},{name: 'animal sightseeing'},{name: 'salsa dancing'},{name: 'hackathon'}],
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.ADD_REST:
            // create the new rest object from provided data

            // push the new restaurant onto a copy of the Restaurant list

            // return updated state
            return state;
        case types.REMOVE_REST:
            // create the new rest object from provided data
            // push the new restaurant onto a copy of the Restaurant list
            // return updated state
            return state;

        default:
            return state;
      // eslint-disable-next-line
    };
};

export default profileReducer;