import React from 'react';
import  './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../../assets/shopping-bag.svg'

import {ToggleCartDisplayStatus } from '../../../reducer/cart/cart.action' //Action name
import {connect} from 'react-redux'

const CartIcon =(props) =>{
    return(
        <div className="cart-icon" onClick={props.toggleCartDisplayStatus}>
                <ShoppingIcon className ="shopping-icon"/>
                <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps =(dispath)=>{
    return{
        toggleCartDisplayStatus: ()=>dispath(ToggleCartDisplayStatus())
    }
}
export default connect(null,mapDispatchToProps)(CartIcon) ;