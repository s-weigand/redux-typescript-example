import { createStore, applyMiddleware, combineReducers } from 'redux';

import userProfileReducer from "./userProfile";
import usersReducer from "./users";

export default combineReducers({
        usersReducer,
        userProfileReducer,
})