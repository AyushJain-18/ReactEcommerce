import React from 'react';

import './shop.styles.scss';
import PreviewCollectionComponent from '../../components/shop-page/preview-collection/preview-collection.compoenent';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../reducer/shop/shop.selector';
import { connect } from 'react-redux';

const ShopComponent=({collections})=> {
        return(
            <div className ='shop-page'>
                {collections.
                map(({id, ...OtherValueOfEachCollectionItem})=>(
                         <PreviewCollectionComponent key={id} {...OtherValueOfEachCollectionItem}/>
                ))}
                   
            </div>
        )
    }
const mapStateToProps = createStructuredSelector({collections: selectCollections})
export default connect(mapStateToProps)(ShopComponent);