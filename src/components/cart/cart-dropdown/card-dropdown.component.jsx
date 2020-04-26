import React from 'react';
import './cart-dropdown.styles.scss'

import CustumButton from '../../CustumComponents/CustumButon/custumButton.component';
import  CartItemComponent from '../cart-items/cart-items.component';

import {connect} from 'react-redux';
import {selectCartItem} from '../../../reducer/cart/cart.selector';
import {selectCurrentUser} from '../../../reducer/user/user.selector';
import {withRouter} from 'react-router-dom'



const CartDropDown =(props)=>{
    return(
        <div className="cart-dropdown" >
            <div className="cart-items">
                {props.cartItems.length?
                    props.cartItems.map(item => <CartItemComponent key={item.id} item={item}/>):
                <div className="empty-cart">Cart is Empty</div>
                }
            </div>
                    {props.currentUser?
                            <CustumButton onClick={()=>props.history.push('/chekout')}>
                                Go to Checkout</CustumButton>:
                            <CustumButton onClick={()=>props.history.push('/signin')}>
                                Sign-In to Checkout</CustumButton>    
                }
                    
            </div>
    )
};
const mapStateToProps =(state)=>{
    return{
        cartItems:selectCartItem(state),
        currentUser: selectCurrentUser(state)
    }
}
export default withRouter(connect(mapStateToProps)(CartDropDown));