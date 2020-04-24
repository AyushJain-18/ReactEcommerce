
// reducer are function which will return an state object.
// all reducers function are triggered whenever an action is performed.

import {UserActionType} from './user.types'

const INITIAL_STATE ={
    currentUser: null
}
const userReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case UserActionType.SET_CURRENT_USER :
            return{
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;