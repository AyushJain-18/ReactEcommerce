import CartAction from "./cart.actionType";

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

export const RemoveItem =(itemToRemove)=>{
  return{
    type: CartAction.REMOVE_ITEM_FROM_CART,
    payload: itemToRemove
  }
}

export const deacreaseCartQuantity =(cartItem)=>{
  return(
    {type: CartAction.DECREASE_ITEM_QUANTITY_IN_CART,
      payload: cartItem
    }
  )
}

export const EmptyCart =()=>{
  return{
    type: CartAction.EMPTY_CART
  }
}
