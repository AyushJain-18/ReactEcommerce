
// reducer are function which will return an state object.
// all reducers function are triggered whenever an action is performed.

import {UserActionType} from './user.types'

const INITIAL_STATE ={
    currentUser: null,
    errorMessage: null
}
const userReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case UserActionType.LOGIN_SUCCESS:
            return{
                ...state,
                currentUser: action.payload,
                errorMessage: null
            }
        case UserActionType.USER_SIGN_OUT_SUCCESS:
            return{
                ...state,
                currentUser: null,
                errorMessage: null
            }
        case UserActionType.LOGIN_FAILURE:
        case UserActionType.USER_SIGN_OUT_FAILURE:
                return{
                    ...state,
                    errorMessage: action.payload
                }

        default:
            return state;
    }
}

export default userReducer;