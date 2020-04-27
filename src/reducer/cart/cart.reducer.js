import CartAction  from './cart.actionType';

import {addItemToCart,removeItemFromCart,deacreaseItemQuantityIncart} from './cart.util'

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
            case CartAction.HIDE_CART:
                return{
                    ...state,
                    hidden:true
                }
            case CartAction.REMOVE_ITEM_FROM_CART:
                return{
                    ...state,
                    cartItem: removeItemFromCart(state.cartItem,action.payload)
                }
            case CartAction.DECREASE_ITEM_QUANTITY_IN_CART:
                return{
                    ...state,
                    cartItem: deacreaseItemQuantityIncart(state.cartItem,action.payload)
                }
                case CartAction.EMPTY_CART:
                    return CART_INITIAL_STATE
            default:
               return state
    }
}

// Selector without memoization
// gives performance issue;
export const cartItemSelector = (state)=>state.cart.cartItem.reduce((accumulator, eachItem)=>accumulator+eachItem.quantity,0)


export default cartReducer;