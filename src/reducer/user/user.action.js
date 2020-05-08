
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
export const LoginSuccess = (user)=>{
    return{
        type: UserActionType.LOGIN_SUCCESS,
        payload: user
    }
}
export const LoginFailure = (error)=>{
    return{
        type: UserActionType.LOGIN_FAILURE,
        payload: error
    }
}
export const emailLoginStart = (email,password)=>{
    return{
        type: UserActionType.EMAIL_LOGIN_START,
        payload: {email, password}
    }
}
