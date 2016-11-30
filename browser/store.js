import { compose, createStore, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const enhancer = compose(
  applyMiddleware(thunk, createLogger()),
  persistState(['currentAdmin', 'channels']),
)

export default createStore(rootReducer, enhancer);
