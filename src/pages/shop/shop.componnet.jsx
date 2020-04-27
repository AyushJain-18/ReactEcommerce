import React from 'react';

import './shop.styles.scss';
import {Route} from 'react-router-dom'

import CollectionOverview from '../../components/shop-page/collection-overview/collection-overview.component';
import CollectionComponent from '../../components/shop-page/collection/collection.component';

const ShopComponent=({match})=> {
    console.log('PRAMS',match)
        return(
            <div className ='shop-page'>
                <Route exact path ={`${match.path}`} component={CollectionOverview}/>
                <Route path={`${match.path}/:categoryId`} component={CollectionComponent}/>
            </div>
        )
    }

export default ShopComponent;