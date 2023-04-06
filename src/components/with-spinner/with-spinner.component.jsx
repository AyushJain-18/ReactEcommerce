import React from "react";
import Spinner from "../CustumComponents/spinner/spinner.component"

// eslint-disable-next-line react/display-name
const WithSpinner =(WrapperComponent)=>({isLoading, ...otherProps})=>(
  isLoading? 
    (<Spinner/>):
    ( <WrapperComponent {...otherProps}/>
    )
)

export default WithSpinner;