export const addItemToCart =(cart, itemToAdd)=>{
    let isItemInCart = false;
     cart.map(cartItem=>{
        if(cartItem.id === itemToAdd.id){
            cartItem.quantity++;
            isItemInCart = true;
        }
    })
    if(!isItemInCart){
        return  [...cart,{...itemToAdd, quantity:1}]
    }
    return [...cart];
}