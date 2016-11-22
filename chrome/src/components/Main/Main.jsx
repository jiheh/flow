import React from 'react';

import MainApp from './MainApp/MainAppContainer.js';
import Background from './Background/BackgroundContainer.js';
import Login from './Login/LoginContainer.jsx';
import { propTypes as userPropTypes } from '../../reducers/user';

import './Main.scss';


const Main = ({
  user,
}) => (
  <div className="main">
    <Background />
   {user.name ? <MainApp /> : <Login />}
  </div>
);

Main.propTypes = {
  user: userPropTypes,
};

export default Main;
