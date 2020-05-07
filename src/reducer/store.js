import {createStore ,applyMiddleware} from 'redux';
 
//  a miidleware that log store sate change and all action performed
import logger from 'redux-logger'

//persistance store
import {persistStore} from 'redux-persist'

//root-reducer
import  combineReducers from './root-reducer'

//redux-thunk a middelware that allow as to fire finctions
import thunk from 'redux-thunk';

// redux-saga
import createSagaMiddelware from 'redux-saga';

import {fetchCollectionStart} from './shop/shop.saga'

const sagaMiddelware = createSagaMiddelware() // in this function we can pass configuraton object
const middleware = [
    sagaMiddelware
    // thunk
];
console.log('process.env',process.env);
if(process.env.NODE_ENV ==="development"){
    middleware.push(logger);
}

// const devTools =
//   process.env.NODE_ENV === "production"
//     ? applyMiddleware(...middlewares)
//     : composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(combineReducers , applyMiddleware(...middleware));
            
//here we are running our each saga 
             sagaMiddelware.run(fetchCollectionStart)

// create a persist-store 
// a libarary that use memoiztion and hydrated our store with some pre-loaded state value
 export const persistor = persistStore(store)

export default store;




/** createStore
 * * @returns A Redux store that lets you read the state, dispatch actions and
 *   subscribe to changes.
 * 
 * 
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several
 * reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @template S State object type.
 *
 * @param reducer A function that returns the next state tree, given the
 *   current state tree and the action to handle.
 *
 * @param [preloadedState] The initial state. You may optionally specify it to
 *   hydrate the state from the server in universal apps, or to restore a
 *   previously serialized user session. If you use `combineReducers` to
 *   produce the root reducer function, this must be an object with the same
 *   shape as `combineReducers` keys.
 *
 * @param [enhancer] The store enhancer. You may optionally specify it to
 *   enhance the store with third-party capabilities such as middleware, time
 *   travel, persistence, etc. The only store enhancer that ships with Redux
 *   is `applyMiddleware()`.
 *
 */