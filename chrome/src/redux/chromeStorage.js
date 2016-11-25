/* global chrome */

import _ from 'lodash';

const chromeStorageMiddleware = (keys) => {
  return store => next => (action) => {
    const currState = store.getState();
    const result = next(action);
    const nextState = store.getState();

    for (const key of keys) {
      if (!_.isEqual(currState[key], nextState[key])) {
        chrome.storage.sync.set({ [key]: nextState[key] });
      }
    }

    return result;
  };
};

export const loadFromStorage = (keys, resolve) => {
  if (!keys || !keys.length) { return Promise.resolve({}); }

  let i = 0;
  const result = {};

  const loadNext = (key) => {
    if (i === keys.length || !key) {
      resolve(result);
    } else {
      chrome.storage.sync.get(key, (res) => {
        if(res[key]) { result[key] = res[key]; }
        i += 1;
        loadNext(keys[i]);
      });
    }
  };

  return loadNext(keys[i]);
};

export default chromeStorageMiddleware;
