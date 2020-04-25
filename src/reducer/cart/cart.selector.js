import {createSelector} from 'reselect';


// input selector
export const selectCart =(state)=>state.cart;

// output Seletor
export const selectCartItem =createSelector(
    [selectCart],
    cart=>cart.cartItem
    )

export const selectTotalCartItemQuantity= createSelector(
        [selectCartItem],
        (cartItem)=>cartItem.reduce((accumulator,item)=>accumulator+item.quantity,0)
    )
