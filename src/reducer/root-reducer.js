import {combineReducers} from 'redux';

// Turns an object whose values are different reducer functions,
// into a single reducer function. It will call every child reducer,
// and gather their results into a single state object, whose keys 
// correspond to the keys of the passed reducer functions.

//  comnbine reducers a function take in an object and combine all reducern to one file. 


import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import ItemReducer from './item/item.reducer';

// reducer for our persistance
import {persistReducer} from 'redux-persist';

//storage we are using
import storage from 'redux-persist/lib/storage'

//creating cofig object for redux-persist

const redux_persist_config ={
    key: 'root',
    storage,
    whitelist: ['cart']

}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    item: ItemReducer
})
export default  persistReducer(redux_persist_config, rootReducer);
// combineReducers(
//     {
//         user: userReducer,
//         cart: cartReducer,
//         item: ItemReducer
//     }
//     )