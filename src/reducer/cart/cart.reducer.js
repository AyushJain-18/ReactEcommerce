import CartAction  from './cart.actionType';

import {addItemToCart} from './cart.util'

const CART_INITIAL_STATE ={
    hidden: true,
    cartItem: []
}
// react will only re-render when object changes bit not when object property changes
const cartReducer =(state =CART_INITIAL_STATE ,action)=>{
    switch(action.type){
        case CartAction.TOOGLE_CART_DISPLAY_STATE:
            return{
                ...state,
                hidden: !state.hidden 
            }
        case CartAction.ADD_TO_CART:
            return{
                ...state,
                cartItem: addItemToCart(state.cartItem, action.payload)
            }
            default:
                return state
    }
}

// Selector without memoization
// gives performance issue;
export const cartItemSelector = (state)=>state.cart.cartItem.reduce((accumulator, eachItem)=>accumulator+eachItem.quantity,0)


export default cartReducer;