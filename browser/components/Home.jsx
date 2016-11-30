import React from 'react';
import HomeLogin from './HomeLogin/HomeLoginContainer.js';
import './Home.scss';

export default () => (
  <div className="home">
    <img className="background-image" src="/api/images/random" />
    <div className="banner text-center text-inverted">
      <h1>flow</h1>
    </div>
    <div id="chrome-wrapper">
      <div id="chrome-inner" className="pt-card pt-elevation-1">
        <h4>
          a chrome extension that fosters the mental well-being of its users through beautiful images, tranquil music, and personal-reflection tools
        </h4>
        <br />
        <a className="pt-button pt-fill" role="button" tabIndex="0">Download now from the Chrome Web Store</a>
      </div>
    </div>
    <div id="webapp-wrapper">
      <div id="webapp-inner" className="pt-card pt-elevation-1">
        <h4>
          a web application for organizations of all sizes to connect to and keep track of their members' wellness
        </h4>
        <br />
        <HomeLogin />
      </div>
    </div>
  </div>
);
