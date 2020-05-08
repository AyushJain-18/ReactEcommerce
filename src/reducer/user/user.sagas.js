import {takeLatest, all ,call,put} from 'redux-saga/effects'
import { UserActionType } from './user.types'

import { googleAuthProvider, userSignIN}from '../../firebase/firebase-auth-method'
import {auth} from '../../firebase/firebase-setup'
import createUserProfileDocument from '../../firebase/firestore-setup'


import {LoginFailure, LoginSuccess,userSignOutSuccess, userSignOutFailure } from './user.action'


function* getSnapshotFromUserAuth(user){
    try{
        const userReffernce = yield createUserProfileDocument(user);
        const userSnapshot  = yield userReffernce.get();
        yield put(LoginSuccess({ id: userSnapshot.id, ...userSnapshot.data()}))
    }catch(error){
             yield put(LoginFailure(error.message))
    }
}
function* signOut(){
    try{
        yield auth.signOut();
        yield put(userSignOutSuccess())
        } catch(error){
        yield put(userSignOutFailure(error))
    }
 
}
function* getUserSession(){
    const userAuth =  yield userSignIN()
        if(!userAuth){
            return 
        }
        yield getSnapshotFromUserAuth(userAuth)
}
function* gmailLogin(){
    try{
            const {user} = yield auth.signInWithPopup(googleAuthProvider)
            yield getSnapshotFromUserAuth(user)
    }catch(error){
        yield put(LoginFailure(error.message))
    }
}

function* emailLogin({payload:{email,password}}){
    try{
        const {user}=         yield  auth.signInWithEmailAndPassword(email, password);
        yield  getSnapshotFromUserAuth(user)
        } catch(error){
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
               alert('Wrong password.');
          } else {
                  alert(errorMessage);
          }
          yield put(LoginFailure(errorMessage))
        }
  }

function* startEmailLogin(){
    yield takeLatest(UserActionType.EMAIL_LOGIN_START, emailLogin)
}
function* startGmailSignIn(){
    yield takeLatest(UserActionType.GMAIL_LOGIN_START, gmailLogin)
} 

function* onCheckUserSession(){
    yield takeLatest(UserActionType.CHECK_USER_SESSION, getUserSession)
}
function* startUserSignOut(){

    yield takeLatest(UserActionType.USER_SIGN_OUT_START, signOut)    
}

export default function* userSaga(){
    yield all(
        [
            call(startGmailSignIn),
            call(startEmailLogin),
            call(onCheckUserSession),
            call(startUserSignOut)
        ]
    )
}