import React from 'react';
import HomeLogin from './HomeLogin/HomeLoginContainer.js';
import './Home.scss';

export default () => (
  <div className='home' style={{backgroundImage: 'url(/api/images/random)'}}>
    <div className='color-filter'/>

    <div className='banner text-center text-inverted'>
      <p id='title'>flow</p>
      <p id='subtitle'>fostering mental well-being, one tab at a time</p>
    </div>

    <div id='chrome-wrapper'>
      <div id='chrome-inner'>
        <p className='header'>Users</p>
        <p className='homepage-text'>
          Discover beautiful images, music, and personal-reflection tools everytime you open a new tab
        </p>
        <br />
        <a className='pt-button' role='button' tabIndex='0'>Add flow to your Chrome browser</a>
      </div>
    </div>

    <div id='webapp-wrapper'>
      <div id='webapp-inner'>
        <p className='header'>Organizations</p>
        <p className='homepage-text'>
          Discover a web application that allows you to connect to your members and track their mental wellness
        </p>
        <br />
        <HomeLogin />
      </div>
    </div>

  </div>
);
