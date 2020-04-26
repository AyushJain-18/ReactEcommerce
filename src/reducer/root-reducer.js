import {combineReducers} from 'redux';

// Turns an object whose values are different reducer functions,
// into a single reducer function. It will call every child reducer,
// and gather their results into a single state object, whose keys 
// correspond to the keys of the passed reducer functions.

//  comnbine reducers a function take in an object and combine all reducern to one file. 


import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import ItemReducer from './item/item.reducer';
export default combineReducers(
    {
        user: userReducer,
        cart: cartReducer,
        item: ItemReducer
    }
    )