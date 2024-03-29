import React ,{useState}from "react";
import {Link} from "react-router-dom"

import "./header.styles.scss"

//that how we have to import our svg images
import {ReactComponent as Logo} from "../../assets/4.4 crown.svg.svg";

// import {signOut} from "../../firebase/firebase-auth-method"

// using redux in react
import {connect} from "react-redux"
import CartIcon from "../cart/cart-icon/cart-icon.component"
import CartDropDown from "../cart/cart-dropdown/card-dropdown.component";

import {selectCartHiddenStatus} from "../../reducer/cart/cart.selector";
import {selectCurrentUser} from "../../reducer/user/user.selector"
import {createStructuredSelector} from "reselect"

import {HeaderContainer,
  LogoContainer,
  OptionDiv,
  OptionLink,
  OptionsContainer,
  MenuIcon,
  MenuContent
} from "../header/header.styles"

import {userSignOutStart} from "../../reducer/user/user.action"
const HeaderComponent =({currentUser,hidden, actionSignOutStart})=>{
  const [displayMenuClass, setToggleClass]= useState("");

  const changeToggledState = ()=>{
    if(displayMenuClass){
      setToggleClass("");
      return;
    }
    setToggleClass("toggeled")
  }
  return(
    <div>
      <HeaderContainer>
        <LogoContainer  to="/"><Logo/></LogoContainer>
        <OptionsContainer>
          <OptionLink  to= "/shop">SHOP</OptionLink>
          {currentUser? 
            <OptionDiv>
              <div aria-hidden="true" onClick ={actionSignOutStart}> SIGN OUT</div>
            </OptionDiv>: 
            <OptionLink>
              <Link  to= "/signin"> SIGN IN </Link>
            </OptionLink> 
          }
          <CartIcon/>
          { displayMenuClass === "toggeled"?
            <MenuIcon className="fa fa-times" onClick = {changeToggledState}/>:
            <MenuIcon className="fa fa-bars" onClick = {changeToggledState}/>
          }
        </OptionsContainer> 
        {hidden? null: <CartDropDown/>}
      </HeaderContainer>
      {displayMenuClass? 
  
        <MenuContent>
          <Link  to= "/shop">SHOP</Link>
          {currentUser? 
            <div aria-hidden="true"  onClick ={actionSignOutStart}> SIGN OUT</div>: 
            <Link  to= "/signin"> SIGN IN </Link>
          }
        </MenuContent>: null}
    </div>
  )
}

// mapStateToProps is a function which will take state as paramterand 
// this function is being passed into connect.
// state will be store. 
//retutn 
const mapStateToProps = createStructuredSelector({
  hidden: selectCartHiddenStatus,
  currentUser: selectCurrentUser
})
// const mapStateToProps =(state)=>(
//             { currentUser: state.user.currentUser,
//                 hidden:   state.cart.hidden
//             }
//     )
const mapDispatchToProps = (dispatch)=>{
  return{
    actionSignOutStart: ()=> dispatch(userSignOutStart())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);


// connect :- A higher order function which will take function as a parameter 
// return a function which will take component as a parameter. 


/**
 * Connects a React component to a Redux store.
 *
 * - Without arguments, just wraps the component, without changing the behavior / props
 *
 * - If 2 params are passed (3rd param, mergeProps, is skipped), default behavior
 * is to override ownProps (as stated in the docs), so what remains is everything that's
 * not a state or dispatch prop
 *
 * - When 3rd param is passed, we don't know if ownProps propagate and whether they
 * should be valid component props, because it depends on mergeProps implementation.
 * As such, it is the user's responsibility to extend ownProps interface from state or
 * dispatch props or both when applicable
 *
 * @param mapStateToProps
 * @param mapDispatchToProps
 * @param mergeProps
 * @param options
 */