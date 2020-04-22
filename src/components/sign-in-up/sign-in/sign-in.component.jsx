import React from 'react';
import './sign-in.comonent.scss'
import FormInput from '../../CustumComponents/form-input/form-input.component'
import CustumButton from '../../CustumComponents/CustumButon/custumButton.component'

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
            <h2>I already have an acoount</h2>
            <span> Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
              <FormInput type="email" name="email" label ={"Email"}
                    value={this.state.email} required
                    handleChange ={this.handleOnchnage}/>
                        
                <FormInput type="password" name="password" label={"Password"}
                        value={this.state.password} required
                        handleChange ={this.handleOnchnage}/>

                <CustumButton type ="submit">Sign In</CustumButton>

            </form>
        </div>
    );
}
}

export default SignInOutComponent ;