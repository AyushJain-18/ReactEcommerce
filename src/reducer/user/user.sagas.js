import {takeLatest, all ,call,put} from 'redux-saga/effects'
import { UserActionType } from './user.types'

import { googleAuthProvider } from '../../firebase/firebase-auth-method'
import {auth} from '../../firebase/firebase-setup'
import createUserProfileDocument from '../../firebase/firestore-setup'


import {gmailLoginFailure, gmailLoginSuccess} from './user.action'


function* gmailLogin(){
    try{
            const {user} =        yield auth.signInWithPopup(googleAuthProvider)
            const userReffernce = yield createUserProfileDocument(user);
            const userSnapshot  = yield userReffernce.get();
            yield put(gmailLoginSuccess({ id: userSnapshot.id, ...userSnapshot.data()}))
    }catch(error){
        yield put(gmailLoginFailure(error.message))
    }
   
 
}
function* startGmailSignIn(){
    yield console.log('ji')
    yield takeLatest(UserActionType.GMAIL_LOGIN_START, gmailLogin)
} 

export default function* userSaga(){
    yield all([call(startGmailSignIn)])
}