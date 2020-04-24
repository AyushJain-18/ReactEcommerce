import CartAction from './cart.actionType';

export const ToggleCartDisplayStatus = ()=>{
    return{
        type: CartAction.TOOGLE_CART_DISPLAY_STATE
    }
}
