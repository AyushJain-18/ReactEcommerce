import React from 'react';

import './sign-up.styles.scss'
import CustumButon from '../../CustumComponents/CustumButon/custumButton.component'
import FormInput from '../../CustumComponents/form-input/form-input.component'

import {signUpWithEmailAndPassword} from '../../../firebase/firebase-auth-method'

class SignUpCompoenent extends React.Component{

    constructor(){
            super()
            this.state ={
                displayName : '',
                email: '',
                password: '',
                confirmPassword: '',
            };
    }
    handelChange =(event) =>{
        console.log('Handel change',event.target)
        const{name,value}= event.target;
        this.setState({
            [name]: value
        })
    }
    handelSubmit =async(event) =>{
        event.preventDefault()
       const userRefference = await signUpWithEmailAndPassword({...this.state});
       console.log("Result", userRefference)
       if(userRefference){
        this.setState({
            displayName : '',
            email: '',
            password: '',
            confirmPassword: '',
        })
}
    }
  render(){
      const {displayName, email, password, confirmPassword} = this.state
      return(
          <div className ="sign-up"> 
              <h2>Sign Up here!</h2>
                <form onSubmit ={this.handelSubmit}>
                    <FormInput
                        handleChange = {(event)=>this.handelChange(event)}
                        label ='Display Name'
                        type ='name'
                        name ='displayName'
                        value ={displayName}
                        required
                    />
                     <FormInput
                        handleChange = {(event)=>this.handelChange(event)}
                        label ='Email'
                        type ='email'
                        name ='email'
                        value ={email}
                        required
                    />
                     <FormInput
                        handleChange = {(event)=>this.handelChange(event)}
                        label ='Password'
                        type ='password'
                        name ='password'
                        value ={password}
                        required
                    />
                     <FormInput
                        handleChange = {(event)=>this.handelChange(event)}
                        label ='Confirm Password'
                        type ='password'
                        name ='confirmPassword'
                        value ={confirmPassword}
                        required
                    />
                    <CustumButon onClick ={this.handelSubmit}> SIGN UP</CustumButon>
                </form>
          </div>
      )
  }
}

export default SignUpCompoenent;