import React from 'react';

import SHOP_DATA from './shop.data.js'
import './shop.styles.scss';
import PreviewCollectionComponent from '../../components/shop-page/preview-collection/preview-collection.compoenent';

class ShopComponent extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            collections: SHOP_DATA // array of items/ varios collection we have in our website
        }
    }
    render(){
        return(
            <div className ='shop-page'>
                {this.state.collections.
                map(({id, ...OtherValueOfEachCollectionItem})=>(
                         <PreviewCollectionComponent key={id} {...OtherValueOfEachCollectionItem}/>
                ))}
                   
            </div>
        )
    }
}

export default ShopComponent;