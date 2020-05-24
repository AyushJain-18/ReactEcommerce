// it will listen for every action that we will pas through it
import { takeLatest, call, put } from 'redux-saga/effects'
import SHOP_ACTION from './shop.actionTypes'
//import axios from 'axios'
// const shopCollection = yield axios.get('https://ecom-server-ayush.herokuapp.com/db');
     

import {mapCollectionArray} from '../../firebase/firestore-setup';
import {firestore} from '../../firebase/firebase-setup'

import {fetchCollectionFailure, fetchCollectionSuccess} from './shop.action'

function* getCollection(){
    try{
        let shopCollection =firestore.collection('shop');
        // calling async code here yeild will work like await
        let collectionArray = yield shopCollection.get()  
        /**
             * Creates an Effect description that instructs the middleware to call the
             * function `fn` with `args` as arguments.
             *  mapCollectionArray(collectionArray);
         */
        let collectionJSONObject =  yield call(mapCollectionArray, collectionArray )
        yield put(fetchCollectionSuccess(collectionJSONObject)) // dispatches the action inside saga
     } catch(error){
        yield  put(fetchCollectionFailure(error.message))
    }
}
export function* fetchCollectionStart(){
    yield takeLatest(SHOP_ACTION.FETCH_COLLECTION_START, getCollection) 
}


