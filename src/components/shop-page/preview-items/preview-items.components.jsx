import React from 'react';

import {withRouter} from 'react-router-dom'
import './preview-items.styles.scss'
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
        {/* <button onClick ={()=>history.push('/AddToCart')}>Add to cart</button> */}
    </div>
    ) 
}

export default  withRouter(PreviewItems)  ; 