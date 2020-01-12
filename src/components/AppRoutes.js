import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import SearchRoute from './search/SearchRoute';
import { isLoggedIn, logoutUser } from '../utils/auth';

const renderComponent = (Component, authRequired) => {
  return props => {
    if (authRequired) {
      if (!isLoggedIn()) {
        return <Redirect to="/login" />;
      }
    }
    return <Component {...props} />;
  };
};

const logout = () => {
  logoutUser();
  return <Redirect to="/login" />;
};

class AppRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/search" />} />
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup" render={renderComponent(Signup, false)} />
        <Route exact path="/profile" render={renderComponent(Profile, true)} />
        <Route exact path="/logout" render={logout} />
        <Route path="/search" component={SearchRoute} />
      </Switch>
    );
  }
}

export default AppRoutes;
