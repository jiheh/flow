import { compose, createStore, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const PROD = (process.env.NODE_ENV === 'production');

const enhancer = compose(
  applyMiddleware(PROD ? thunk : [thunk, createLogger()]),
  persistState(['currentAdmin']),
)

export default createStore(rootReducer, enhancer);
