
import {firestore} from './firebase-setup'

const createUserProfileDocument =async (authUser ,otherprops)=>{
    if(!authUser) return;
      let userRefference = await firestore.doc(`/users/${authUser.uid}`);
      let userSnapshot   = await userRefference.get();
  
      if(!userSnapshot.exists){
        // user dosenot exits in DB we need to add it to db
        const {displayName,email}=authUser;
        const createdAt = new Date();
        try{
           await userRefference.set({
            displayName,
            email,
            createdAt,
            ...otherprops
          })
        } catch(error){
          console.log('Adding user to Db failed', error.message)
        }
      }
      return userRefference;
  }

  export default createUserProfileDocument ;