import React from 'react';
import './collection-overview.styles.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollections} from '../../../reducer/shop/shop.selector'

import  PreviewCollectionComponent from'../preview-collection/preview-collection.compoenent';
const CollectionOverview = ({collections})=>(
    <div className="coleection-overview-container">
         {collections.
                map(({id, ...OtherValueOfEachCollectionItem})=>(
                         <PreviewCollectionComponent key={id} isDisplayFour {...OtherValueOfEachCollectionItem}/>
         ))}
    </div>
)
const mapStateToProps = createStructuredSelector({collections: selectCollections})

export default connect(mapStateToProps)(CollectionOverview)