
// reducer are function which will return an state object.
// all reducers function are triggered whenever an action is performed.

import {UserActionType} from './user.types'

const INITIAL_STATE ={
    currentUser: null,
    errorMessage: null,
    isFetchingUserDetail: false 
}
const userReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case UserActionType.LOGIN_SUCCESS:
            return{
                ...state,
                currentUser: action.payload,
                errorMessage: null,
                isFetchingUserDetail: false
            }
        case UserActionType.USER_SIGN_OUT_SUCCESS:
            return{
                ...state,
                currentUser: null,
                errorMessage: null
            }
        case UserActionType.LOGIN_FAILURE:
        case UserActionType.USER_SIGN_OUT_FAILURE:
        case UserActionType.USER_SIGN_UP_FAILURE:
                return{
                    ...state,
                    errorMessage: action.payload,
                    isFetchingUserDetail: false
                }
        case UserActionType.CHECK_USER_SESSION:
        case UserActionType.EMAIL_LOGIN_START:
        case UserActionType.USER_SIGN_UP_START:
            return{
                ...state,
                isFetchingUserDetail: true
            }
        case UserActionType.END_SPINNER:
                return{
                    ...state,
                    isFetchingUserDetail: false
                }
        default:
            return state;
    }
}

export default userReducer;