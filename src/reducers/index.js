import { combineReducers } from "redux";
import UserReducer from './UserReducer';

export default rootReducer = combineReducers(
    {
        userItems: UserReducer,
    }
)