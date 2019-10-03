import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { connect } from "react-redux";

import Home from "../pages/Home";
import Login from "../components/Login";

import history from "./history";

import PrivateRoute from "./PrivateRoute";

const Routes = props => (
  <ConnectedRouter history={history}>
    <Switch>
      <PrivateRoute token={props.token} path="/" exact component={Home} />
      <Route path="/auth/login" component={Login} />
      <PrivateRoute
        token={props.token}
        path="/profile"
        component={() => <div>Profile</div>}
      />
    </Switch>
  </ConnectedRouter>
);

const mapStateToProps = state => ({
  token: state.authState.token
});

export default connect(
  mapStateToProps,
  null
)(Routes);
