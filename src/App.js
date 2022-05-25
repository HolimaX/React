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
