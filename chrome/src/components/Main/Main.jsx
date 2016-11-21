import React from 'react';

import MainApp from './MainApp/MainAppContainer.js';
import Background from './Background/BackgroundContainer.js';

import './Main.scss';


const Main = ({
}) => (
  <div className="main">
    <MainApp />
    <Background />
  </div>
);

export default Main;
