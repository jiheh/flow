import React from 'react';
import { connect } from'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Root from './components/Root';
import Home from './components/Home';
import { Login, Signup } from './components/Auth';
import UserList from './components/User/UserList';
import UserDetail from './components/User/UserDetail';
import { fetchUsers } from './reducers/organization';
import { retrieveLoggedInUser } from './reducers/auth';

/* -----------------    COMPONENT     ------------------ */

let Routes = ({ fetchInitialData }) => (
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login} onEnter={fetchInitialData}/>
      <Route path="signup" component={Signup} />
      <Route path="users" component={UserList} />
      <Route path="users/:id" component={UserDetail} />
      <Route path="*" component={Home} onEnter={() => browserHistory.push('/') } />
    </Route>
  </Router>
);

/* -----------------    CONTAINER     ------------------ */

let mapProps = null;

let mapDispatch = dispatch => ({
 fetchInitialData: () => {
    dispatch(fetchUsers())
    dispatch(retrieveLoggedInUser())
  }
})

export default connect(mapProps, mapDispatch)(Routes);
