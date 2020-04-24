import firebase ,{auth} from './firebase-setup'
import createUserWithEmailAndPassword from './firestore-setup'


// 1.google-sign-in
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle =()=> auth.signInWithPopup(provider);

// when user of my application clicked on Sign in with google that time we will
// make a token access request to Authoriaztion endpoint

//2.Sign-in with email and password
export const signInwithEmailAndPassword = async({email, password}) =>{
        console.log('email, password', email, password)
  try{
      await auth.signInWithEmailAndPassword(email, password)
      } catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
             alert('Wrong password.');
        } else {
                alert(errorMessage);
        }
        console.log(error);
      }
}

// 3. signout
export const signOut = async()=>{
           await  auth.signOut();
           alert('User sign Out');
}

//4. signup and add to firestore database
export const signUpWithEmailAndPassword = async (user)=>{
        const {displayName, email, password} = user;
    try{
        const {user} =  await auth.createUserWithEmailAndPassword(email,password); // return auth user
        console.log('createUserWithEmailAndPassword', user);
        const userRefference = await createUserWithEmailAndPassword(user,{displayName});
        console.log('userRefference', userRefference);
        return userRefference;
    } catch(error){
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                    alert(`The password is too weak ${errorMessage}`);
            } else {
                    alert(errorMessage);
            }
            console.log(error);
    }
}

