import React from 'react';
import './sign-in-out.page.scss'

import SignINAndUpComponent from '../../components/sign-in-up/sign-in-and-up/sign-in-up.component'

class SignInOutLandingComponent extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className='sigin-container'>
                 <SignINAndUpComponent/>
                 <img  className ="Background-Image" src={require('../../assets/homepage.jpg')} />              
            </div>
        )
    }
}

export default SignInOutLandingComponent;