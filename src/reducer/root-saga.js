import {all, call} from 'redux-saga/effects'

import {fetchCollectionStart} from './shop/shop.saga';
import userSaga from './user/user.sagas';

export default function* rootSaga(){
  yield  all(
        [
                call(fetchCollectionStart),
                call(userSaga)
                // fetchCollectionStart()
        ]
    )
}

// yield all will allow us to initialize all our saga immediatelly