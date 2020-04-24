
//Action are function that return an object conating payload and type.
// user is payload;

import {UserActionType} from './user.types';
export const setInitialState = user=>{
    return {
        type:UserActionType.SET_CURRENT_USER,
        payload: user
    }
};