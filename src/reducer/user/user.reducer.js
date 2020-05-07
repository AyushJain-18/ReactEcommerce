
// reducer are function which will return an state object.
// all reducers function are triggered whenever an action is performed.

import {UserActionType} from './user.types'

const INITIAL_STATE ={
    currentUser: null,
    errorMessage: null
}
const userReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case UserActionType.GMAIL_LOGIN_SUCCESS:
        case UserActionType.EMAIL_LOGIN_SUCCESS:
            return{
                ...state,
                currentUser: action.payload,
                errorMessage: null
            }
        case UserActionType.GMAIL_LOGIN_FAILURE:
        case UserActionType.EMAIL_LOGIN_FAILURE:
                return{
                    ...state,
                    errorMessage: action.payload
                }

        default:
            return state;
    }
}

export default userReducer;