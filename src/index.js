import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Security } from '@okta/okta-react';
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
import { faStar, faBeer } from "@fortawesome/free-solid-svg-icons";

library.add(faStar, faBeer);

function onAuthRequired({ history }) {
  history.push('/login');
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Security
        issuer={config.issuer}
        client_id={config.client_id}
        redirect_uri={config.redirect_uri}
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
