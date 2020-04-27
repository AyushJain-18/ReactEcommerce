import React from 'react';
import './App.css';

import {auth} from './firebase/firebase-setup'
import createUserProfileDocument from './firebase/firestore-setup'

import {connect} from 'react-redux'
import {setInitialState} from './reducer/user/user.action';


import RouteComponent from './routes'
import { EmptyCart } from './reducer/cart/cart.action';

class App extends React.Component {

  componentDidMount(){
    const{actionForUserStateChange} = this.props;
   this.authUsnsubscribeFunction= auth.onAuthStateChanged( async userAuth=>{
     if(userAuth===null){
        this.props.emptyCartAction();
     }
        const userRef = await createUserProfileDocument(userAuth)
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
const mapStateToprops = null;

// this dispatch/satet will be passed in from connect
const mapDispatchToprops = (dispatch)=>{
    return{
      actionForUserStateChange : (user)=>dispatch(setInitialState(user)),
      emptyCartAction: ()=>dispatch(EmptyCart())
      
    }
}
export default  connect(mapStateToprops,mapDispatchToprops)(App);

