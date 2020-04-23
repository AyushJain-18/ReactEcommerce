import React from 'react';
import './sign-in.comonent.scss'

import FormInput from '../../CustumComponents/form-input/form-input.component'
import CustumButton from '../../CustumComponents/CustumButon/custumButton.component'

import {Link} from 'react-router-dom'

import {signInWithGoogle} from '../../../firebase/firebase-auth-method';

class SignInOutComponent extends React.Component{
    constructor(){
        super()
        this.state ={
            email: '',
            password: ''
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({
            email : '',
            password: ''
        })
    }
    handleOnchnage=(event)=>{
            const{name,value} = event.target;
            console.log("name is ",name +'  value is ',+value);
            this.setState(prevState =>{
                return { [name]: value}
            })
    }
render(){
    console.log('SIgn in renders',this.state)
    return(
        <div className ="sign-in">
            <h2 className = "title">WANNA LOGIN IN!</h2>
            <div className ='subtitle'>
                    <div> 
                            LOGIN here
                        </div> 
                        <div className= 'or'> OR</div>
                    <Link to ='/signUp'>
                        <div className ='signup'>
                                    SiGN UP
                                </div>
                        </Link>
            </div>
            <form onSubmit={this.handleSubmit}>

                <FormInput 
                    type="email" 
                    name="email" 
                    label={"Email"}
                    value={this.state.email} 
                    required
                    handleChange={this.handleOnchnage} />
                        
                <FormInput
                        type="password"
                        name="password"
                        label={"Password"}
                        value={this.state.password} 
                        required
                        handleChange ={this.handleOnchnage}/>

                <div className ="button-wrap">
                        <CustumButton 
                            type ="submit">
                                Sign In
                                </CustumButton>
                        <CustumButton
                            onClick ={signInWithGoogle}
                            isGoogleSignIN >
                                Google Sign In
                                </CustumButton>
                </div>
            </form>
        </div>
    );
}
}

export default SignInOutComponent ;