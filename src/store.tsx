import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { logger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import usersReducer from './reducers/users';
import userProfileReducer from './reducers/userProfile';
import axios from 'axios';
import rootReducer from './reducers'


export default function configureStore(preloadedState={}) {
	const middlewares = [logger, promise()];
	const middlewareEnhancer =applyMiddleware(...middlewares)
	const enhancers = [middlewareEnhancer, 
	// this makes the redux chrome dev tools aware of redux
	window.devToolsExtension ? window.devToolsExtension() : (f) => (f)]
  	const composedEnhancers = compose(...enhancers);
	// const enhancers = [middlewareEnhancer]
	const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancers
    );

	if (process.env.NODE_ENV !== 'production' && module.hot) {
	  module.hot.accept('./reducers', () =>{
	  	const nextReducer = require('./reducers/index').default;
	    store.replaceReducer(nextReducer)
	  }
	  )
	}
	​
  return store
}