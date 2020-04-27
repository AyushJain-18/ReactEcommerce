import React from 'react';
import PreviewItems from '../preview-items/preview-items.components'

import './preview-collection.styles.scss';

const PreviewCollectionComponent =({title,items,isDisplayFour})=>{
    let filterItemValue = 20;
    if(isDisplayFour){
        filterItemValue =4
    }
    return(
        <div className ='collection-preview'>
            <h1 className ="title">{title.toUpperCase()}</h1>
            <div className ="preview">
                {items.filter(
                    (item,index)=>index<filterItemValue)
                        .map(item => (
                            <PreviewItems key={item.id} item={item} title={title}/>
                            )
                        )
                 }
            </div>
        </div>
    )
}

export default PreviewCollectionComponent;