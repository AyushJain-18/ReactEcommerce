import React from "react"
import "./checkout.styles.scss"

import CheckoutComponent from "../../components/checkout/checkout.components"
import {HideCart}from "../../reducer/cart/cart.action";
import {selectTotalPriceOfItemsInCart, selectCartItem} from "../../reducer/cart/cart.selector.js"
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect"

import PayNowComponent from "../../components/stripe/stripe-pay-now.component"
class Checkout extends React.Component{
  UNSAFE_componentWillMount(){
    this.props.hideCartAction();
  }
  render(){
    return(
      <div className ="checkout-page">
        <div className ="checkout-header ">
          <div className ="header-block">
            <span>Product</span>
          </div>
          <div className ="header-block">
            <span>Description</span>
          </div>
          <div className ="header-block">
            <span>Quantity</span>
          </div>
          <div className ="header-block">
            <span>Price</span>
          </div>
          <div className ="header-block">
            <span>Remove</span>
          </div>
        </div>
        {
          this.props.cartItems.map(eachItemInCart=>
            <CheckoutComponent key ={eachItemInCart.id}cartItem ={eachItemInCart}/>
          )}
        <div className='total'>
          <span>Total: ${this.props.totalCartValue}</span>
        </div>
        <PayNowComponent price ={this.props.totalCartValue}/> 
      </div>
    )
  }
}
const mapStateToProps = createStructuredSelector({
  totalCartValue:selectTotalPriceOfItemsInCart,
  cartItems: selectCartItem
})
const mapDispatchToProps =(dispatch)=>{
  return({
    hideCartAction: ()=>dispatch(HideCart())
  })
}
export default connect(mapStateToProps,mapDispatchToProps)(Checkout);