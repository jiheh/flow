/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from './components/Main/MainContainer.js';
import store from './store';

console.log('       __ _               \n');
console.log('      / _| |              \n');
console.log('     | |_| | _____      __\n');
console.log('     |  _| |/ _ \\ \\ /\\ / /\n');
console.log('     | | | | (_) \\ V  V / \n');
console.log('     |_| |_|\\___/ \\_/\\_/  \n');

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);
