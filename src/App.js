import React from 'react';
import './App.css';

import {auth} from './firebase/firebase-setup'
import createUserProfileDocument from './firebase/firestore-setup'

import {connect} from 'react-redux'
import {setInitialState} from './reducer/user/user.action'

import RouteComponent from './routes'

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
            <RouteComponent/>
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

