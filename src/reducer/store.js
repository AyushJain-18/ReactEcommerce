import {createStore ,applyMiddleware} from 'redux';
import logger from 'redux-logger' //  a miidleware that log store sate change and all action performed

import  combineReducers from './root-reducer'
const middleware = [logger];

const store = createStore(combineReducers , applyMiddleware(...middleware));

export default store;




/**
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