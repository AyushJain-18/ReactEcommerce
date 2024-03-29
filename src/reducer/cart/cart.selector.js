import {createSelector} from "reselect";


// input selector
export const selectCart =(state)=>state.cart;

export const selectCartHiddenStatus = createSelector(
  [selectCart],
  cart=>cart.hidden
)

// output Seletor
export const selectCartItem =createSelector(
  [selectCart],
  cart=>cart.cartItem
)

export const selectTotalCartItemQuantity= createSelector(
  [selectCartItem],
  (cartItem)=>cartItem.reduce((accumulator,item)=>accumulator+item.quantity,0)
)
export const selectTotalPriceOfItemsInCart= createSelector(
  [selectCartItem],
  (cartItem)=>cartItem.reduce((acc,eachItem)=>acc+eachItem.price*eachItem.quantity,0)
)
