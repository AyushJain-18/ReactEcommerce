import React from 'react'
import './custumButton.styles.scss'
const CustumButton =({children,isGoogleSignIN, ...otherprops})=>{
    return(
                <button 
                    className ={`${isGoogleSignIN? 'google-button': null} custom-button`} 
                     {...otherprops}>
                         {children}
                </button>
    )
}

export default CustumButton