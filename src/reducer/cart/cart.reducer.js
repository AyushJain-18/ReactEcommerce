import CartAction  from './cart.actionType';

const CART_INITIAL_STATE ={
    hidden: true
}
const cartReducer =(state =CART_INITIAL_STATE ,action)=>{
    switch(action.type){
        case CartAction.TOOGLE_CART_DISPLAY_STATE:
            return{
                ...state,
                hidden: !state.hidden 
            }
            default:
                return state
    }
}

export default cartReducer;