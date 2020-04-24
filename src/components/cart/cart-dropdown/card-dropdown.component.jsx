import React from 'react';
import './cart-dropdown.styles.scss'



import CustumButton from '../../CustumComponents/CustumButon/custumButton.component';

const CartDropDown =()=>{
    return(
        <div className="cart-dropdown" >
            <div className="cart-items"/>
                    <CustumButton >Go to Checkout</CustumButton>
            </div>
    )
};
export default  CartDropDown ;