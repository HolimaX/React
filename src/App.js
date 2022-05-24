import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';
import "./App.scss";

import Home from "./components/home";
import Favourites from "./components/favourites";
import Dashboard from "./components/user";
import config from "./app.config.js";
import LoginPage from "./components/auth/LoginPage.js";
import ProfilePage from './components/auth/ProfilePage';
import RegistrationForm from './components/auth/RegistrationForm';
import Navbar from "./components/navbar";

// TODO: Add complete support for Standard and Premium NPM module loading to provide Pro features
// See https://github.com/HolimaX/React/issues/8 ( EDU-1 )
// See https://stackoverflow.com/questions/47444672/how-do-i-access-a-modules-method-in-react-from-another-module
export function componentIdentityDescriptionAH(REACT_APP_COMPONENT_VERSION, REACT_APP_COMPONENT_NAME) {
  const VERSION = REACT_APP_COMPONENT_VERSION
  const COMPONENT = REACT_APP_COMPONENT_NAME
  return "<div>"+VERSION+"</div>"+"<div>"+COMPONENT+"</div><div><p>This functionality is not yet supported!</p></div>"
}

class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favourite" component={Favourites} />
          <Route path="/user" component={Dashboard} />
          <Route path="/login" render={() => <LoginPage baseUrl={config.url} />} />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <Route path="/register" component={RegistrationForm} />
          <SecureRoute path="/profile" component={ProfilePage} />
        </Switch>
      </>
    );
  }
}

export default App;
