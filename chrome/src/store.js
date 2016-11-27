/* global chrome */
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import chromeStorage, { loadFromStorage } from './redux/chromeStorage';
import { middleware } from 'redux-async-initial-state';

import rootReducer from './reducers';

// keys from redux store which will be loaded from
// chrome storage api when app loads, and automatically
// saved to chrome storage when any action changes their value
const keysToPersistInChrome = ['settings', 'user'];

// load values for keys to persist from storage into redux store
// perform any initial server requests that are independent
// from login state
const loadStore = (currentState) => {
  const chromeStoragePromise = loadFromStorage(keysToPersistInChrome);

  return Promise.all([
    chromeStoragePromise,
  ])
    .then(([
      loadedChromeStorage,
    ]) => ({
      ...currentState,
      ...loadedChromeStorage,
    }));
};

export default createStore(
  rootReducer,
  applyMiddleware(
    chromeStorage(keysToPersistInChrome),
    thunk,
    createLogger(),
    middleware(loadStore),
  )
);
