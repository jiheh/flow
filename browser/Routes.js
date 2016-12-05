import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import HomeSignUpContainer from './components/HomeSignUp/HomeSignUpContainer';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import OrganizationContainer from './components/Dashboard/Viewport/Organization/OrganizationContainer';
import NotificationsContainer from './components/Dashboard/Viewport/Notifications/NotificationsContainer';
import SurveysContainer from './components/Dashboard/Viewport/Surveys/SurveysContainer';
import SettingsContainer from './components/Dashboard/Viewport/Settings/SettingsContainer';

/* -----------------    COMPONENT     ------------------ */

const Routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Root}>
      <IndexRoute component={Home} />
      <Route path='signup' component={HomeSignUpContainer} />

      <Route path='dashboard' component={DashboardContainer}>
        <Route path='/overview' component={OrganizationContainer} />
      	<Route path='/notifications' component={NotificationsContainer} />
      	<Route path='/surveys' component={SurveysContainer} />
      	<Route path='/settings' component={SettingsContainer} />
      </Route>

      <Route path='*' component={Home} onEnter={() => browserHistory.push('/') } />
    </Route>
  </Router>
);

export default Routes;
