import React from 'react'
import './collection.styles.scss';

import {connect} from 'react-redux'
import {selectItem} from '../../../reducer/shop/shop.selector'

import PreviewItems from '../preview-items/preview-items.components'

const CollectionComponent =({match, categoryItem})=>{
    return(
    <div className ="collection-page">  
    <div className='title'>{categoryItem.title}</div>
        <div className="items">
            {categoryItem.items.map(item => 
                <PreviewItems key ={item.id} item={item} title={categoryItem.title}/>
            )}
        </div>
    </div>

    )
}
const mapStateToProps = (state, ownProps)=>{
    return({
        categoryItem: selectItem(ownProps.match.params.categoryId)(state)
    })
}
export default connect(mapStateToProps)(CollectionComponent) 