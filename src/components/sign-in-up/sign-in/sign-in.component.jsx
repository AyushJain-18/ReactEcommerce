import React from 'react';
import './sign-in.comonent.scss'

import FormInput from '../../CustumComponents/form-input/form-input.component'
import CustumButton from '../../CustumComponents/CustumButon/custumButton.component'

import {Link} from 'react-router-dom'

import {signInWithGoogle ,signInwithEmailAndPassword} from '../../../firebase/firebase-auth-method';

import {connect} from 'react-redux';
import {HideCart} from '../../../reducer/cart/cart.action';
import {gmailLoginStart, emailLoginStart} from '../../../reducer/user/user.action'
class SignInOutComponent extends React.Component{
    constructor(){
        super()
        this.state ={
            email: '',
            password: ''
        }
    }
    handleSubmit= async (event)=>{
        event.preventDefault();
        const {email, password} =this.state
        console.log(password)
        this.props.emailLoginStart(email, password)
        this.setState({
            email : '',
            password: ''
        })
    }
    handleOnchnage=(event)=>{
            const{name,value} = event.target;
            this.setState(prevState =>{
                return { [name]: value}
            })
    }
    componentDidMount(){
        this.props.hideCartAction();
    }
render(){
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
                            type='button'
                            onClick ={(event)=>{
                                // event.preventDefault();
                                //signInWithGoogle();
                                this.props.googleSignIn()
                            }}
                            isGoogleSignIN >
                                Google Sign In
                                </CustumButton>
                </div>
            </form>
        </div>
    );
}
}
const mapDispatchToProps =(dispatch)=>({
    hideCartAction: ()=>dispatch(HideCart()),
    googleSignIn: ()=> dispatch(gmailLoginStart()),
    emailLoginStart: (email, password)=> dispatch(emailLoginStart(email, password))
})
  
export default connect(null,mapDispatchToProps)(SignInOutComponent) ;