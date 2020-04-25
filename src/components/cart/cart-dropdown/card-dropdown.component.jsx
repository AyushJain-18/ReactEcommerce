import React from 'react';
import './cart-dropdown.styles.scss'

import CustumButton from '../../CustumComponents/CustumButon/custumButton.component';
import  CartItemComponent from '../cart-items/cart-items.component';

import {connect} from 'react-redux'

const CartDropDown =(props)=>{
    return(
        <div className="cart-dropdown" >
            <div className="cart-items">
                {
                    props.cartItems.map(item => <CartItemComponent key={item.id} item={item}/>)
                }
            </div>
                    <CustumButton >Go to Checkout</CustumButton>
            </div>
    )
};
const mapStateToProps =(state)=>{
    return{
        cartItems:state.cart.cartItem
    }
}
export default connect(mapStateToProps)(CartDropDown)  ;