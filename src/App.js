import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';
import {Routerhomepage,Title,TopicDetails} from './pages/RouterExmaple/Router';

import Homepage from './pages/homepage/homepage';
import ShopComponent from './pages/shop/shop.componnet';
import HeaderComponnets from './components/header/header.components';
import SignInOutLandingComponent from './pages/sign-in-out-landing/sign-in-out.page'
import SignINAndUpComponent from '../src/components/sign-in-up/sign-in-and-up/sign-in-up.component'



function App() {
  return (
    <div>
      <HeaderComponnets/>
     <Switch>
           <Route exact path= "/" component ={Homepage}/>
           <Route exact path= "/shop" component ={ShopComponent}/>
           <Route exact path= "/sign" component ={SignINAndUpComponent}/>
      </Switch>
      
    </div>
  );
}

export default App;

{/* <Switch>
            <Route exact path ="/" component={Routerhomepage}/>
            <Route exact path ="/title" component={Title}/>
            <Route exact ={false} path ="/Title/:titleID" component={TopicDetails}/>
        </Switch> */}

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