import React from 'react';

import {withRouter} from 'react-router-dom'
import './preview-items.styles.scss'
import CustumButton from '../../CustumComponents/CustumButon/custumButton.component';
const PreviewItems =({name,price, imageUrl ,history})=>{
    return (
    <div className="collection-item">
        <div className="item-image"
            style ={{
                backgroundImage : `url(${imageUrl})`
            }}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustumButton inverted> Add to Cart</CustumButton>
        {/* <button onClick ={()=>history.push('/AddToCart')}>Add to cart</button> */}
    </div>
    ) 
}

export default  withRouter(PreviewItems)  ; 