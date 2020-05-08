import {takeLatest, all ,call,put} from 'redux-saga/effects'
import { UserActionType } from './user.types'

import { googleAuthProvider } from '../../firebase/firebase-auth-method'
import {auth} from '../../firebase/firebase-setup'
import createUserProfileDocument from '../../firebase/firestore-setup'


import {LoginFailure, LoginSuccess, } from './user.action'


function* getSnapshotFromUserAuth(user){
    try{
        const userReffernce = yield createUserProfileDocument(user);
        const userSnapshot  = yield userReffernce.get();
        yield put(LoginSuccess({ id: userSnapshot.id, ...userSnapshot.data()}))
    }catch(error){
             yield put(LoginFailure(error.message))
    }
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
          console.log(error);
          yield put(LoginFailure(errorMessage))
        }
  }
function* startEmailLogin(){
    yield takeLatest(UserActionType.EMAIL_LOGIN_START, emailLogin)
}
function* startGmailSignIn(){
    yield takeLatest(UserActionType.GMAIL_LOGIN_START, gmailLogin)
} 

export default function* userSaga(){
    yield all(
        [
            call(startGmailSignIn),
            call(startEmailLogin)
        ]
    )
}