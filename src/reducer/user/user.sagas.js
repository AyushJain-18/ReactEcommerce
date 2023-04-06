import {takeLatest, all ,call,put} from "redux-saga/effects"
import { UserActionType } from "./user.types"

import { googleAuthProvider, userSignIN}from "../../firebase/firebase-auth-method"
import {auth} from "../../firebase/firebase-setup"
import createUserProfileDocument from "../../firebase/firestore-setup"


import {
  LoginFailure,
  LoginSuccess,
  userSignOutSuccess,
  userSignOutFailure,
  userSignUpFailure,
  userSignUpSuccess
} from "./user.action"


function* getSnapshotFromUserAuth(user, otherPorps){
  try{
    const userReffernce = yield createUserProfileDocument(user, otherPorps);
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
    yield put({type: UserActionType.END_SPINNER})
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
    if (errorCode === "auth/wrong-password") {
      alert("Wrong password.");
    } else {
      alert(errorMessage);
    }
    yield put(LoginFailure(errorMessage))
  }
}


function *startUserSignUp({payload: {email, password,displayName}}){
  try{
    const {user} =  yield auth.createUserWithEmailAndPassword(email,password);
    yield put(userSignUpSuccess({user,displayName}))
  }catch(error){
    yield put(userSignUpFailure(error.message))
  }
}

function *userSignInAfterSingUp({payload: {user, displayName}}){
  yield getSnapshotFromUserAuth(user,{displayName})
}
function * onSignUpSuccess(){
  yield takeLatest(UserActionType.USER_SIGN_UP_SUCCESS, userSignInAfterSingUp)
}
function* userSignUp(){
  yield takeLatest(UserActionType.USER_SIGN_UP_START,startUserSignUp)
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
      call(startUserSignOut),
      call(userSignUp),
      call(onSignUpSuccess)
    ]
  )
}