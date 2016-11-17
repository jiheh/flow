import React from 'react';
import { connect } from'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Root from './components/Root';
import Home from './components/Home';
import { Login, Signup } from './components/Auth';
import UserList from './components/User/UserList';
import UserDetail from './components/User/UserDetail';
import { fetchUsers } from './redux/users';
import { retrieveLoggedInUser } from './redux/auth';

/* -----------------    COMPONENT     ------------------ */

const Routes = ({ fetchInitialData }) => (
  <Router history={browserHistory}>
    <Route path="/" component={Root} onEnter={fetchInitialData}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
      <Route path="users" component={UserList} />
      <Route path="users/:id" component={UserDetail} />
      <Route path="*" component={Home} onEnter={() => browserHistory.push('/') } />
    </Route>
  </Router>
);

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;

const mapDispatch = dispatch => ({
 fetchInitialData: () => {
    dispatch(fetchUsers())
    dispatch(retrieveLoggedInUser())
  }
})

export default connect(mapProps, mapDispatch)(Routes);
