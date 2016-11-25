/* global chrome */
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import chromeStorage from './redux/chromeStorage';
import { middleware } from 'redux-async-initial-state';
import axios from 'axios';

import rootReducer from './reducers';

const keysToPersistInChrome = ['settings', 'user'];

const loadFromStorage = (keys, resolve) => {
  if (!keys || !keys.length) { return Promise.resolve({}); }

  let i = 0;
  const result = {};

  const loadNext = (key) => {
    if (i === keys.length || !key) {
      resolve(result);
    } else {
      chrome.storage.sync.get(key, (res) => {
        result[key] = res[key];
        i += 1;
        loadNext(keys[i]);
      });
    }
  };

  return loadNext(keys[i]);
};

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
