import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Security, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import "./index.css";
import config from './app.config';
import App from "./App";

import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { library } from "@fortawesome/fontawesome-svg-core";
import { 
  faStar, 
  faBeer, 
  faEnvelope, 
  faLock, 
  faExclamationTriangle, 
  faMobileAlt, 
  faCloud, 
  faChartBar, 
  faUserShield 
} from "@fortawesome/free-solid-svg-icons";

import ReactGA from 'react-ga4';
import store from "./store";

library.add(faStar, faBeer, faEnvelope, faLock, faExclamationTriangle, faMobileAlt, faCloud, faChartBar, faUserShield);

// Initialize GA4 if measurement ID is provided
const gaId = process.env.REACT_APP_GA_TRACKING_ID || process.env.REACT_APP_GA_MEASUREMENT_ID;
if (gaId) {
  ReactGA.initialize(gaId);
}

const isAuthConfigured = !!(config.issuer && config.client_id && !config.issuer.includes('dummy'));

const oktaAuth = isAuthConfigured
  ? new OktaAuth({
      issuer: config.issuer,
      clientId: config.client_id,
      redirectUri: config.redirect_uri || (window.location.origin + '/implicit/callback'),
      pkce: true,
    })
  : new OktaAuth({
      issuer: config.issuer || 'https://dev-example.okta.com/oauth2/default',
      clientId: config.client_id || 'dummy-client-id',
      redirectUri: config.redirect_uri || (window.location.origin + '/implicit/callback'),
      pkce: true,
    });

const AppWithRouter = () => {
  const navigate = useNavigate();

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    navigate(toRelativeUrl(originalUri || '/', window.location.origin), { replace: true });
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Routes>
        <Route path="/implicit/callback" element={<LoginCallback />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </Security>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>
);

serviceWorker.unregister();

