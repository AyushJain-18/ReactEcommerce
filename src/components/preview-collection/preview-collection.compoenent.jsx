import React from 'react';
import PreviewItems from '../preview-items/preview-items.components'

import './preview-collection.styles.scss';

const PreviewCollectionComponent =({title,items})=>{
    return(
        <div className ='collection-preview'>
            <h1 className ="title">{title.toUpperCase()}</h1>
            <div className ="preview">
                {items.filter(
                    (item,index)=>index<4)
                        .map(({id , ...items}) => (
                            <PreviewItems key={id} {...items}/>
                            )
                        )
                 }
            </div>
        </div>
    )
}

export default PreviewCollectionComponent;