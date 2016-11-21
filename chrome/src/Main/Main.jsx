import React from 'react';

import MainApp from '../MainApp/MainAppContainer.js';
import Background from '../Background/BackgroundContainer.js';


const Main = ({
}) => (
  <div
    className="main"
    style={{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
    }}
  >
    <MainApp />
    <Background />
  </div>
);

export default Main;
