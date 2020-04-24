import React from 'react';
import {Link} from 'react-router-dom'

import './header.styles.scss'

//that how we have to import our svg images
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg';

import {signOut} from '../../firebase/firebase-auth-method'

// using redux in react
import {connect} from 'react-redux'

const HeaderComponent =({currentUser})=>{
    console.log('header component', currentUser)
return(
    <div className="header">
        <Link className="logo-container" to="/">
                <Logo className = 'logo'/>
        </Link>
        <div className= "options">
            <Link className= "option" to= "/shop">SHOP</Link>
            <Link className= "option" to= "">CONTACT</Link>
            {currentUser? 
                    <div className= "option" onClick ={signOut}>
                        SIGN OUT
                    </div>: 
                    <Link className= "option" to= "/signin">
                        SIGN IN 
                    </Link>
                }
            <Link className= "option" to= ""></Link>
        </div>
    </div>
)
}

// mapStateToProps is a function which will take state as paramterand 
// this function is being passed into connect.
// state will be store. 
//retutn 
const mapStateToProps =(state)=>({ currentUser: state.user.currentUser})

export default connect(mapStateToProps)(HeaderComponent);


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