import { combineReducers } from 'redux';

import {GetUser, DoSearch } from './users';

export default combineReducers({
    GetUser,
    DoSearch    
});