
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

export const checkUserSession =()=>{
    return  {
                type: UserActionType.CHECK_USER_SESSION
            }
}

export const userSignOutStart =()=>{
    return  {
                type: UserActionType.USER_SIGN_OUT_START
            }
}

export const userSignOutSuccess =()=>{
    return  {
                type: UserActionType.USER_SIGN_OUT_SUCCESS
            }
}
export const userSignOutFailure =(error)=>{
    return  {
                type: UserActionType.USER_SIGN_OUT_FAILURE,
                payload: error
            }
}
export const userSignUpFailure =(error)=>{
    return  {
                type: UserActionType.USER_SIGN_UP_FAILURE,
                payload: error
            }
}
export const userSignUpStart =(userCredentials)=>{
    return  {
                type: UserActionType.USER_SIGN_UP_START,
                payload: userCredentials
            }
}
export const userSignUpSuccess =(userDetails)=>{
    return  {
                type: UserActionType.USER_SIGN_UP_SUCCESS,
                payload: userDetails
            }
}