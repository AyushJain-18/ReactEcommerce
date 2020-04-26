import React from 'react';
import './preview-single-item.styles.scss'

import {Redirect, Link} from 'react-router-dom'

import CustumButon from '../../CustumComponents/CustumButon/custumButton.component';

import {connect} from 'react-redux';
import {HideCart, AddItemToCart, ToggleCartDisplayStatus} from '../../../reducer/cart/cart.action'

class PreviewSingleItem extends React.Component{
    componentDidMount(){
        this.props.hideCartAction();
    }
    render(){
        // const{id,name,imageUrl,price} = this.props.location.item;
        console.log(this.props.location.item)
        const item = this.props.location.item;
        return(
            <div className="single-item-container">
                {!this.props.location.item? <Redirect to='/shop'/>:(
                    <div className="single-item-preview">
                       <div className="single-item-image"
                            style ={
                                {
                                    backgroundImage: `url(${item.imageUrl})`
                                }
                            }
                       />
                       <div className ="single-item-content">
                        <h1>{item.name}</h1>
                        <div className="single-item-description">
                            <p>
                            
                            Product has no wonder they are worried — the quality of a product description'
                             can make or break a sale, especially if it doesn’t include the 
                             information a shopper needs to make a purchase decision. 
                             Providing key product details is critical 
                            </p>
                        </div>
                        <div className ="single-item-price">
                        <h2>price: {item.price}$</h2>
                        </div>
                        <div className ='single-button-container'>
                            <CustumButon onClick={()=> this.props.addItemToCartAction(item)} >Add to cart</CustumButon>
                            <CustumButon onClick={()=> this.props.toggleCartDisplay()} >View cart</CustumButon>
                            <Link to="/">
                                <CustumButon>More items</CustumButon>
                            </Link>
                        </div>
                       </div>
                    </div>
                )}
            </div>
            
       )
    }
}

const mapDispatchToProps =(dispatch)=>({
    hideCartAction: ()=>dispatch(HideCart()),
    addItemToCartAction: (item)=>dispatch(AddItemToCart(item)),
    toggleCartDisplay: ()=>dispatch(ToggleCartDisplayStatus())
})
export default connect(null, mapDispatchToProps)(PreviewSingleItem);