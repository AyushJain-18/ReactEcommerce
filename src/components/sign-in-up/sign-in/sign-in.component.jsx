import React from 'react';
import './sign-in.comonent.scss'

import FormInput from '../../CustumComponents/form-input/form-input.component'
import CustumButton from '../../CustumComponents/CustumButon/custumButton.component'

import {Link} from 'react-router-dom'

import {signInWithGoogle ,signInwithEmailAndPassword} from '../../../firebase/firebase-auth-method';

import {connect} from 'react-redux';
import {HideCart} from '../../../reducer/cart/cart.action'
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
        await signInwithEmailAndPassword({...this.state})
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
                            onClick ={(event)=>{
                                event.preventDefault();
                                signInWithGoogle();
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
    hideCartAction: ()=>dispatch(HideCart())
})
  
export default connect(null,mapDispatchToProps)(SignInOutComponent) ;