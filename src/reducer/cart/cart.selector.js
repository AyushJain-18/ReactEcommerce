import {createSelector} from 'reselect';


// input selector
export const selectCart =(state)=>state.cart;

export const selectCardHiddenStatus = createSelector(
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
