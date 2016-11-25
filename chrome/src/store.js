/* global chrome */
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import chromeStorage, { loadFromStorage } from './redux/chromeStorage';
import { middleware } from 'redux-async-initial-state';
import axios from 'axios';

import rootReducer from './reducers';

// keys from redux store which will be loaded from
// chrome storage api when app loads, and automatically
// saved to chrome storage when any action changes their value
const keysToPersistInChrome = ['settings', 'user'];

// load values for keys to persist from storage into redux store
// perform any initial server requests that are independent
// from login state
const loadStore = (currentState) => {
  let loadedChromeStorage;
  let imageUrl;
  let videoUrl;
  return new Promise((resolve) => {
    loadFromStorage(keysToPersistInChrome, resolve);
  })
    .then((fromStorage) => {
      loadedChromeStorage = fromStorage;
      return axios.get('http://localhost:8080/api/images/random');
    })
    .then((res) => {
      imageUrl = res.data;
      return axios.get('http://localhost:8080/api/videos/random');
    })
    .then((res) => {
      videoUrl = res.data;
      return {
        ...currentState,
        ...loadedChromeStorage,
        backgroundImage: imageUrl,
        backgroundVideo: videoUrl,
      };
    });
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
