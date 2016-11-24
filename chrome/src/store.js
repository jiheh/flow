import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import chromeStorage from './redux/chromeStorage';

import rootReducer from './reducers';

export default createStore(
  rootReducer,
  applyMiddleware(chromeStorage(['settings', 'user']), thunk, createLogger())
);
