import React from "react";
import  "./cart-icon.styles.scss"
import {ReactComponent as ShoppingIcon} from "../../../assets/shopping-bag.svg"

import {ToggleCartDisplayStatus } from "../../../reducer/cart/cart.action" //Action name
import {connect} from "react-redux"

import {selectTotalCartItemQuantity} from "../../../reducer/cart/cart.selector"

const CartIcon =(props) =>{
  return(
    <div className="cart-icon" onClick={props.toggleCartDisplayStatus}>
      <ShoppingIcon className ="shopping-icon"/>
      <span className="item-count">{props.itemCount}</span>
    </div>
  )
}
const mapStateToProps =(state)=>{
  return{
    itemCount:  selectTotalCartItemQuantity(state)
    // cartItemSelector(state) //-selector withouut memoization   
  }
}

const mapDispatchToProps =(dispath)=>{
  return{
    toggleCartDisplayStatus: ()=>dispath(ToggleCartDisplayStatus())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon) ;