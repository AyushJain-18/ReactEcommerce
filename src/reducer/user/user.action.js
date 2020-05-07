
//Action are function that return an object conating payload and type.
// user is payload;

import {UserActionType} from './user.types';
export const setInitialState = user=>{
    return {
        type:UserActionType.SET_CURRENT_USER,
        payload: user
    }
};

export const gmailLoginStart = ()=>{
    return{
        type: UserActionType.GMAIL_LOGIN_START
    }
}
export const gmailLoginSuccess = (user)=>{
    return{
        type: UserActionType.GMAIL_LOGIN_SUCCESS,
        payload: user
    }
}
export const gmailLoginFailure = (error)=>{
    return{
        type: UserActionType.GMAIL_LOGIN_FAILURE,
        payload: error
    }
}
export const emailLoginStart = (userAndPassword)=>{
    return{
        type: UserActionType.EMAIL_LOGIN_START,
        payload: userAndPassword
    }
}
export const emailLoginSuccess = (user)=>{
    return{
        type: UserActionType.EMAIL_LOGIN_SUCCESS,
        payload: user
    }
}
export const emailLoginFailure = (error)=>{
    return{
        type: UserActionType.EMAIL_LOGIN_FAILURE,
        payload: error
    }
}