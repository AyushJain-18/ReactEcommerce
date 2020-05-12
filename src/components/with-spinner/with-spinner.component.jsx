import React from 'react';
import Spinner from '../CustumComponents/spinner/spinner.component'

const WithSpinner =(WrapperComponent)=>({isLoading, ...otherProps})=>(
                        isLoading? 
                        (<Spinner/>):
                        ( <WrapperComponent {...otherProps}/>
                    )
)

export default WithSpinner;