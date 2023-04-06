import React ,{memo} from "react";
import "./cart-dropdown.styles.scss"

import CustumButton from "../../CustumComponents/CustumButon/custumButton.component";
import  CartItemComponent from "../cart-items/cart-items.component";

import {connect} from "react-redux";
import {selectCartItem} from "../../../reducer/cart/cart.selector";
import {selectCurrentUser} from "../../../reducer/user/user.selector";
import {withRouter} from "react-router-dom"
import {HideCart} from "../../../reducer/cart/cart.action"


const CartDropDown =(props)=>{
  return(
    <div className="cart-dropdown" >
      {/* html UTF-8 Dingbats */}
      <div className="html-dingbats" aria-hidden="true"  onClick={()=>props.hideCartAction()}>&#10008;</div>
      <div className="cart-items">
        {props.cartItems.length?
          props.cartItems.map(item => <CartItemComponent key={item.id} item={item}/>):
          <div className="empty-cart">Cart is Empty</div>
        }
      </div>
      {(props.cartItems.length)?
        (props.currentUser ?
          <CustumButton onClick={()=>props.history.push("/chekout")}>
                                 Checkout</CustumButton>:
          <CustumButton onClick={()=>props.history.push("/signin")}>
                                Sign-In to Checkout</CustumButton>) : 
        <CustumButton onClick ={props.hideCartAction}>
                                Hide Cart
        </CustumButton>  
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
const mapDispatchToProps =(dispatch)=>({
  hideCartAction: ()=>dispatch(HideCart())
})
export default memo(withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropDown)));