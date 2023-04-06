import React, { useEffect } from "react";

import {Route} from "react-router-dom"

import {fetchCollectionStart} from "../../reducer/shop/shop.action";
import {selectFectingState, selectIsCollection} from "../../reducer/shop/shop.selector"
import {connect} from "react-redux"

//container
import CollectionOverviewContainer from "../../components/shop-page/collection-overview/collection.container";
import CollectionContainer from "../../components/shop-page/collection/collection.container";

//compoennt
// import CollectionOverview from "../../components/shop-page/collection-overview/collection-overview.component";
// import CollectionComponent from "../../components/shop-page/collection/collection.component";

// with spinner
// import WithSpinner from "../../components/with-spinner/with-spinner.component";
// const CollectionComponentwithSpinner = WithSpinner(CollectionComponent);
// const CollectionOverviewwithSpinner = WithSpinner(CollectionOverview);

const  ShopComponent = ({match, fetchCollectionStartAsync}) =>{
  useEffect(()=>{fetchCollectionStartAsync()},[fetchCollectionStartAsync])
    
  // const {isCollectionFecting,isCollection,match} = this.props;
  return(
    <div className ='shop-page'>
      <Route exact path ={`${match.path}`} component={CollectionOverviewContainer}/>
      <Route path={`${match.path}/:categoryId`} component={CollectionContainer} />

      {/*
                 <Route path={`${match.path}/:categoryId`} 
                    render={
                        (props)=> <CollectionComponentwithSpinner 
                                    isLoading={isCollection} {...props}/>
                            }/>
*/}
    </div>
  )
}
const mapStateToProps =(state)=>{
  return {
    isCollectionFecting: selectFectingState(state),
    isCollection: selectIsCollection(state)
  }
}
const mapDispatchToprops = (dispatch)=>{
  return{
    fetchCollectionStartAsync :()=> dispatch(fetchCollectionStart())

    // while using thunk
    // fetchCollectionStartAsync :()=> dispatch(fetchCollectionStartAsync())
      
  }
}
export default connect(mapStateToProps, mapDispatchToprops)(ShopComponent);


