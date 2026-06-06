import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { SecureRoute, LoginCallback } from '@okta/okta-react';
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
  renderConfigWarning() {
    // Check if critical Okta params are missing
    if (!config.clientId || !config.issuer) {
      return (
        <div style={{
          backgroundColor: '#fff3cd',
          color: '#856404',
          padding: '10px',
          textAlign: 'center',
          borderBottom: '1px solid #ffeeba',
          fontSize: '14px'
        }}>
          <strong>Notice:</strong> OKTA Authentication is not configured. Features requiring login will be disabled, but you can still browse the site.
        </div>
      );
    }
    return null;
  }

  render() {
    const isAuthConfigured = !!(config.clientId && config.issuer);

    return (
      <>
        {this.renderConfigWarning()}
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favourite" component={Favourites} />
          <Route path="/user" component={Dashboard} />
          <Route path="/login" render={() => <LoginPage baseUrl={config.url} />} />
          <Route path="/implicit/callback" component={LoginCallback} />
          <Route path="/register" component={RegistrationForm} />
          
          {/* Use standard Route if auth is not configured to avoid blocking redirects */}
          {isAuthConfigured ? (
            <SecureRoute path="/profile" component={ProfilePage} />
          ) : (
            <Route path="/profile" component={ProfilePage} />
          )}
        </Switch>
      </>
    );
  }
}

export default App;
