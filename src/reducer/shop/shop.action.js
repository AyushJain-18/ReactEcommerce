import SHOP_ACTION from './shop.actionTypes';

import {mapCollectionArray} from '../../firebase/firestore-setup';
import {firestore} from '../../firebase/firebase-setup'


export const fetchCollectionStart =()=>{
    return{
        type: SHOP_ACTION.FETCH_COLLECTION_START
    }
}

export const fetchCollectionSuccess = (shopCollection) =>{
    return{
        type: SHOP_ACTION.FETCH_COLLECTION_SUCCESS,
        payload: shopCollection
    }
}

export const fetchCollectionFailure = (errorMessage)=>{
    return{
        type: SHOP_ACTION.FETCH_COLLECTION_FAILURE,
        payload: errorMessage
    }
}
// REDUX-THUNK code
// we can return function from action insted of return an JS object

//  what redux thumk middelware dose is , it check all the action and see which action 
// return a function and thus add dispatch to them 
export const fetchCollectionStartAsync =()=>{
    // dispatch =()=>{
        return  (dispatch) =>{
            dispatch(fetchCollectionStart())
            let shopCollection =firestore.collection('shop');
                shopCollection.get()
                    .then( collectionArray =>{
                       let collectionJSONObject =  mapCollectionArray(collectionArray);
                        dispatch(fetchCollectionSuccess(collectionJSONObject))

            }).catch(error => dispatch(fetchCollectionFailure(error.message)))
        }
}