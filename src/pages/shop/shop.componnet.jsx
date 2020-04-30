import React from 'react';

import './shop.styles.scss';
import {Route} from 'react-router-dom'

import CollectionOverview from '../../components/shop-page/collection-overview/collection-overview.component';
import CollectionComponent from '../../components/shop-page/collection/collection.component';
import {addIntialShopData} from '../../reducer/shop/shop.action'
import {connect} from 'react-redux'

import {getDataFromCollection} from '../../firebase/firestore-setup'
class ShopComponent extends React.Component{
    componentDidMount(){
      getDataFromCollection('shop', (collections)=>{
        console.log('shop data is ',collections);
        this.props.addItemToShopReducer(collections)
      });
    }
    render(){
        const match = this.props.match;
        return(
            <div className ='shop-page'>
                <Route exact path ={`${match.path}`} component={CollectionOverview}/>
                <Route path={`${match.path}/:categoryId`} component={CollectionComponent}/>
            </div>
        )
    }
}
    
const mapDispatchToprops = (dispatch)=>{
    return{
        addItemToShopReducer :(collections)=> dispatch(addIntialShopData(collections))
    }
}
export default connect(null, mapDispatchToprops)(ShopComponent);


