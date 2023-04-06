import React from "react";
import "./sign-in-out.page.scss"

import SignIn from "../../components/sign-in-up/sign-in/sign-in.component"
import {withRouter} from "react-router-dom"
import SignUpCompoenent from "../../components/sign-in-up/sign-up/sign-up.components";
class SignInOutLandingComponent extends React.Component{
  render(){
    return(
      <div className='sigin-container'>
        {
          this.props.history.location.pathname === "/signin"?
            <SignIn/>: <SignUpCompoenent/>
        }
        <img  className ="Background-Image" src={"/homepage.jpg"} alt="Shop here"/>              
      </div>
    )
  }
}

export default withRouter(SignInOutLandingComponent);