import React from 'react';
import './cart-items.styles.scss';
class CartItemComponent extends React.Component{
    render(){
        const{price,name,quantity,imageUrl} = this.props.item;
        return(
            <div className ="cart-item">
                <img  className = "cart-item-image" src={imageUrl} alt={name}/>
                <div className="cart-item-details">
                <span className ="name">{name}</span>
                <span>{quantity} x ${price}</span>
                </div>
            </div>
        )
    }
}

export default  CartItemComponent;