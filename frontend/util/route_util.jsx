import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact, currentUser }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to={`/users/${currentUser}`} />
    }
  />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props =>
        loggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}


const msp = state => {
  return {
    loggedIn: Boolean(state.session.id),
    currentUser: state.session.id
  }
}

export const AuthRoute = withRouter(connect(msp)(Auth))
export const ProtectedRoute = withRouter(connect(msp)(Protected))