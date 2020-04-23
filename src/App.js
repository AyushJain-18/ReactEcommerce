import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';
import {Routerhomepage,Title,TopicDetails} from './pages/RouterExmaple/Router';

import {auth} from './firebase/firebase-setup'
import createUserProfileDocument from './firebase/firestore-setup'

import Homepage from './pages/homepage/homepage';
import ShopComponent from './pages/shop/shop.componnet';
import HeaderComponnets from './components/header/header.components';
import SignInOutLandingComponent from './pages/sign-in-out-landing/sign-in-out.page'


class App extends React.Component {
  constructor(){
    super()
    this.state ={
        currentUser: null
    }
  }

  componentDidMount(){
   this.authUsnsubscribeFunction= auth.onAuthStateChanged( async userAuth=>{
     console.log("App auth user is", userAuth)
        const userRef = await createUserProfileDocument(userAuth)
        console.log("App userRef  is", userRef)
        if(userRef){
          userRef.onSnapshot(snaphot =>{
            console.log('Snapshot is',snaphot) // snapshot object  that we are getting on subscribe 
            console.log(snaphot.data())   // to get snapshot data 
            this.setState({
              currentUser: {
                  id: snaphot.id,
                  ...snaphot.data()
                   }
          }, ()=>{console.log(this.state)}
          )
          })
        } else{
          this.setState({currentUser: null})
        }
    })
  }
  componentWillUnmount(){
     this.authUsnsubscribeFunction();
  }
  render(){
    console.log("APP renders", this.state)
    return (
      <div>
        <HeaderComponnets isUserSignIn ={this.state.currentUser}/>
       <Switch>
             <Route exact path= "/" component ={Homepage}/>
             <Route exact path= "/shop" component ={ShopComponent}/>
             <Route exact path= "/signin" component ={SignInOutLandingComponent}/>
             <Route exact path= "/signup" component ={SignInOutLandingComponent}/>
        </Switch>
        
      </div>
    );
  }
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