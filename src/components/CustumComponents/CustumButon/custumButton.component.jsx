import React from 'react'
import './custumButton.styles.scss'
const CustumButton =({children, ...otherprops})=>{
    return(
                <button className ="custom-button" {...otherprops}>{children}</button>
    )
}

export default CustumButton