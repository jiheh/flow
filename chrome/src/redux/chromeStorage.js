/* global chrome */

import _ from 'lodash';
// eslint-disable-next-line no-unused-vars
import { isEqual } from 'lodash';

import Promise from 'bluebird';

// automatically save the values specified by the
// keys array to chrome storage any time an action
// that changes them is dispatched
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

// used for initial loading of values of keys specified
// in keys array from chrome storage to redux store
export const loadFromStorage = (keys) => {
  if (!keys || !keys.length) { return Promise.resolve({}); }

  return new Promise((resolve) => {
    chrome.storage.sync.get(keys, resolve);
  });
};

export default chromeStorageMiddleware;
