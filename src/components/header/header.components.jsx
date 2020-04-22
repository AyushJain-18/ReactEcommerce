import React from 'react';
import {Link} from 'react-router-dom'

import './header.styles.scss'

//that how we have to import our svg images
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg';

const HeaderComponent =()=>{
return(
    <div className="header">
        <Link className="logo-container" to="/">
                <Logo className = 'logo'/>
        </Link>
        <div className= "options">
            <Link className= "option" to= "/shop">SHOP</Link>
            <Link className= "option" to= "">CONTACT</Link>
            <Link className= "option" to= "/sign">SIGN IN </Link>
            <Link className= "option" to= ""></Link>
        </div>
    </div>
)
}

export default HeaderComponent;