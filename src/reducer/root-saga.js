import {all, call} from 'redux-saga/effects'

import {fetchCollectionStart} from './shop/shop.saga';

export default function* rootSaga(){
  yield  all(
        [
                call(fetchCollectionStart),
                // fetchCollectionStart()
        ]
    )
}

// yield all will allow us to initialize all our saga immediatelly