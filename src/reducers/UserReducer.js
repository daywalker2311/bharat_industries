import {
    SET_USER_DATA,
} from '../actions';

const initialState = {
    userData: {},

}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, userData: action.newValue };

        default:
            return state;
    }
};

export default UserReducer;