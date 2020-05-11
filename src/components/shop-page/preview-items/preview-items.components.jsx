import React from 'react';
import './preview-items.styles.scss'

import CustumButton from '../../CustumComponents/CustumButon/custumButton.component';
import {withRouter, Link} from 'react-router-dom'

import {connect} from 'react-redux';
import {AddItemToCart} from '../../../reducer/cart/cart.action';

const PreviewItems =({item ,history,title, AddItemToCartAction})=>{
    const {name,price, imageUrl} = item
    return (
    <div className="collection-item">
        <Link to ={{
            pathname:`/preview/${title}`,
            item: {
                ...item
            }
        }} 
         className="item-image"
            style ={{
                backgroundImage : `url(${imageUrl})`
            }}
        />
        <div className="collection-footer">
            <span>{name}</span>
            <span className="price">{price}$</span>
        </div>
        <CustumButton className ='custom-button' inverted onClick ={()=>AddItemToCartAction(item)}> Add to Cart</CustumButton>
        {/* <button onClick ={()=>history.push('/AddToCart')}>Add to cart</button> */}
    </div>
    ) 
}
const mapDespatchToprops= (dispatch)=>{
    return{
        AddItemToCartAction: (item)=>{
            dispatch(AddItemToCart(item))
        } 
    }
    
}
export default  connect(null,mapDespatchToprops)(PreviewItems)  ; 