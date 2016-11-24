/* global chrome */

import _ from 'lodash';

const chromeStorage = (keys) => {
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

export default chromeStorage;
