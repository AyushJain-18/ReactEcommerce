import React from 'react';
import './App.css';

import {Route, Switch, Redirect} from 'react-router-dom';
import {Routerhomepage,Title,TopicDetails} from './pages/RouterExmaple/Router';

import {auth} from './firebase/firebase-setup'
import createUserProfileDocument from './firebase/firestore-setup'

import Homepage from './pages/homepage/homepage';
import ShopComponent from './pages/shop/shop.componnet';
import HeaderComponnets from './components/header/header.components';
import SignInOutLandingComponent from './pages/sign-in-out-landing/sign-in-out.page'

import {connect} from 'react-redux'


import {setInitialState} from './reducer/user/user.action'


class App extends React.Component {

  componentDidMount(){
    const{actionForUserStateChange} = this.props;
   this.authUsnsubscribeFunction= auth.onAuthStateChanged( async userAuth=>{
     console.log("App auth user is", userAuth)
        const userRef = await createUserProfileDocument(userAuth)
        console.log("App userRef  is", userRef)
        if(userRef){
          userRef.onSnapshot(snaphot =>{
            console.log('Snapshot is',snaphot) // snapshot object  that we are getting on subscribe 
            console.log(snaphot.data())   // to get snapshot data 
            actionForUserStateChange({
              id: snaphot.id,
              ...snaphot.data()
               })  
              })
          
        } else{
          actionForUserStateChange(null)
        }
    })
  }
  componentWillUnmount(){
     this.authUsnsubscribeFunction();
  }
  render(){
    console.log("APP renders", this.props)
    return (
      <div>
        <HeaderComponnets/>
       <Switch>
             <Route exact path= "/" component ={Homepage}/>
             <Route exact path= "/shop" component ={ShopComponent}/>
              <Route exact path= "/signin" 
                 render= {
                   ()=>this.props.currentUser? (
                      <Redirect to='/'/>
                      ):(
                        <SignInOutLandingComponent/>
                       )}
                      />
             <Route exact path= "/signup"
                render= {
                  ()=>this.props.currentUser? (
                     <Redirect to='/'/>
                     ):(
                       <SignInOutLandingComponent/>
                      )}
                     />
             />
        </Switch>
        
      </div>
    );
  }
}
const mapStateToprops =(state)=>({ currentUser: state.user.currentUser})

// this dispatch/satet will be passed in from connect
const mapDispatchToprops = (dispatch)=>{
    return{
      actionForUserStateChange : (user)=>{
        dispatch(setInitialState(user))
      }
    }
}
export default  connect(mapStateToprops,mapDispatchToprops)(App);

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