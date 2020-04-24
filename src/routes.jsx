import React from 'react';
// react-router
import {Route, Switch, Redirect} from 'react-router-dom';
// components
import Homepage from './pages/homepage/homepage';
import ShopComponent from './pages/shop/shop.componnet';
import HeaderComponnets from './components/header/header.components';
import SignInOutLandingComponent from './pages/sign-in-out-landing/sign-in-out.page'

class RouteComponent extends React.Component{
    render(){
            return(
                <div>
                    <HeaderComponnets/>
                     <Switch>
                            <Route exact path= "/" component ={Homepage}/>
                            <Route exact path= "/shop" component ={ShopComponent}/>
                            <Route exact path= "/signin" 
                                    render= {()=>this.props.currentUser? (
                                            <Redirect to='/'/>):(<SignInOutLandingComponent/>
                                            )}/>
                            <Route exact path= "/signup"
                                render= { ()=>this.props.currentUser? (
                                    <Redirect to='/'/>):(<SignInOutLandingComponent/>
                                    )}/>
                    </Switch>
                </div>
            )
    }
}

export default RouteComponent;




/*{
  import {Routerhomepage,Title,TopicDetails} from './pages/RouterExmaple/Router';
   <Switch>
            <Route exact path ="/" component={Routerhomepage}/>
            <Route exact path ="/title" component={Title}/>
            <Route exact ={false} path ="/Title/:titleID" component={TopicDetails}/>
        </Switch> */

// Swith Route link

// React-router Basic Example

//  {/* first set is with exact path matching */}
//  <Route exact path ="/" component={Routerhomepage}/>
//  <Route exact path ="/title" component={Title}/>
//  <Route exact path ="/Title/:titleID" component={TopicDetails}/> 


//  {/* this set is without exact path matcing */}
//  <Route path ="/" component={Routerhomepage}/>
//  <Route path ="/title" component={Title}/>
//  <Route path ="/Title/:titleID" component={TopicDetails}/>