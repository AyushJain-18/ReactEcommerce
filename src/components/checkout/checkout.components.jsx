import React from 'react'
import './checkout.styles.scss';

import {RemoveItem} from '../../reducer/cart/cart.action'
import {connect} from 'react-redux';

import {AddItemToCart, deacreaseCartQuantity} from '../../reducer/cart/cart.action';

const  CheckoutComponent =({cartItem, addItemToCart, removeItemFromCart,deacreaseCartQuantity})=>{
        const{name,imageUrl,price,quantity} =cartItem
        return(
            <div className= "checkout-item">
                <div className='image-container'>
                        <img src={imageUrl}alt=""/>
                </div>
                <span className='name'>{name}</span>
                <div className='quantity'>
                        <div className='arrow' onClick ={()=> deacreaseCartQuantity(cartItem)}>&#10094;</div>
                        <span className = 'value'> {quantity} </span>
                        <div className='arrow' onClick ={()=> addItemToCart(cartItem)}>&#10095;</div>
                </div>
                <span className='price'>{price}</span>
                <div className='remove-button' onClick ={()=>removeItemFromCart(cartItem)}>
                    &#10005;</div>
            </div>  
        )
    }
const mapDispatchToProps =(dispatch)=>{
    return({
        removeItemFromCart: (item)=>dispatch(RemoveItem(item)),
        addItemToCart: (item)=>dispatch(AddItemToCart(item)),
        deacreaseCartQuantity: (item)=>dispatch(deacreaseCartQuantity(item))
    })
}
export default connect(null,mapDispatchToProps)(CheckoutComponent);