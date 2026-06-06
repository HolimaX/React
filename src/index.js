import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Security } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';
import ReactGA from "react-ga4";
import "./index.css";
import config from './app.config';
import App from "./App";

import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";

// eslint-disable-next-line
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line
import $ from "jquery";
// eslint-disable-next-line
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faBeer, faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faStar, faBeer, faUser, faLock, faEnvelope);

function onAuthRequired({ history }) {
  history.push('/login');
}

const restoreOriginalUri = async (_oktaAuth, originalUri) => {
  // Redirect back to the original URL or home
  window.location.replace(originalUri || window.location.origin);
};

// Initialize Okta instance with fallbacks to prevent AuthSdkError
const isAuthConfigured = !!(config.issuer && config.client_id && !config.issuer.includes('dummy'));

const oktaAuth = isAuthConfigured 
  ? new OktaAuth({
      issuer: config.issuer,
      clientId: config.client_id,
      redirectUri: config.redirect_uri || window.location.origin + '/implicit/callback',
      pkce: true
    })
  : {
      // Minimal mock to prevent okta-react from crashing while avoiding network calls
      authStateManager: { updateAuthState: () => {}, getAuthState: () => ({ isAuthenticated: false }), subscribe: () => {} },
      options: {},
      token: { getUserInfo: () => Promise.resolve(null) },
      isAuthenticated: () => Promise.resolve(false)
    };

// Initialize Google Analytics 4 if measurement ID is provided
const GA_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;
if (GA_ID) {
  ReactGA.initialize(GA_ID);
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Security 
        oktaAuth={oktaAuth}
        restoreOriginalUri={restoreOriginalUri}
        onAuthRequired={onAuthRequired}
      >
        <App />
      </Security>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
