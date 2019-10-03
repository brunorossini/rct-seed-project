import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      token ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/auth/login", state: { from: props.location } }}
        />
      )
    }
  />
);

export default PrivateRoute;
