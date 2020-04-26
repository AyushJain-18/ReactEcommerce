import CartAction from './cart.actionType';

export const ToggleCartDisplayStatus = ()=>{
    return{
        type: CartAction.TOOGLE_CART_DISPLAY_STATE
    }
}
export const HideCart =()=>{
    return{
        type:CartAction.HIDE_CART
    }
}
export const AddItemToCart = (item)=>{
    return{
        type: CartAction.ADD_TO_CART,
        payload: item
    }
}
