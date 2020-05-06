import React from 'react';

import {SpinnerContainer,SpinnerOverlay} from './with-spinner.styles';

const WithSpinner =(WrapperComponent)=>{
        const Spinner = ({isLoading, ...otherProps})=>{
                console.log(isLoading, otherProps)
                return isLoading? 
                        (<SpinnerContainer>
                            <SpinnerOverlay/>
                        </SpinnerContainer>):
                        ( <WrapperComponent {...otherProps}/>
                    )
        }
        return Spinner;
}

export default WithSpinner;