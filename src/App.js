import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { LoginCallback, useOktaAuth } from '@okta/okta-react';
import CookieConsent from "react-cookie-consent";
import ReactGA from 'react-ga4';
import "./App.scss";

import Home from "./components/home";
import Favourites from "./components/favourites";
import Dashboard from "./components/user";
import LoginPage from "./components/auth/LoginPage";
import ProfilePage from './components/auth/ProfilePage';
import RegistrationForm from './components/auth/RegistrationForm';
import Navbar from "./components/navbar";
import config from "./app.config";

export function componentIdentityDescriptionAH(REACT_APP_COMPONENT_VERSION, REACT_APP_COMPONENT_NAME) {
  const VERSION = REACT_APP_COMPONENT_VERSION;
  const COMPONENT = REACT_APP_COMPONENT_NAME;
  return `<div>${VERSION}</div><div>${COMPONENT}</div><div><p>This functionality is not yet supported!</p></div>`;
}

const App = () => {
  const location = useLocation();
  const { authState, oktaAuth } = useOktaAuth();
  const [healthCards, setHealthCards] = useState([]);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  useEffect(() => {
    const fetchHealthCards = async () => {
      if (authState?.isAuthenticated && oktaAuth?.getAccessToken) {
        try {
          const accessToken = oktaAuth.getAccessToken();
          const response = await fetch('/api/health-cards', {
            headers: { Authorization: `Bearer ${accessToken}` }
          });
          if (response.ok) {
            const data = await response.json();
            setHealthCards(data || []);
          }
        } catch (err) {
          // Silent fallback for unconfigured mock environment
        }
      }
    };
    fetchHealthCards();
  }, [authState, oktaAuth]);

  useEffect(() => {
    const loadModule = async () => {
      try {
        const baseModule = await import(/* webpackIgnore: true */ '@HolimaX/beerbank').catch(() => null);
        if (baseModule && typeof baseModule.myFunction === 'function') {
          baseModule.myFunction();
        }
      } catch (err) {}
    };
    loadModule();
  }, []);

  const renderConfigWarning = () => {
    if (!config.client_id || !config.issuer || config.issuer.includes('example.com')) {
      return (
        <div style={{
          backgroundColor: '#fff3cd',
          color: '#856404',
          padding: '10px',
          textAlign: 'center',
          borderBottom: '1px solid #ffeeba',
          fontSize: '14px'
        }}>
          <strong>Notice:</strong> OKTA Authentication is not configured. Features requiring login will be disabled, but you can still browse the catalog.
        </div>
      );
    }
    return null;
  };

  return (
    <>
      {renderConfigWarning()}
      <Navbar />
      <CookieConsent
        location="bottom"
        buttonText="I understand and Agree"
        cookieName="CD12_CookieAcceptv12022"
        style={{ background: "#2B373B", opacity: "0.95", zIndex: 9999 }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies and data to enhance the user experience. By clicking 'I understand and Agree', you agree to terms.
      </CookieConsent>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage baseUrl={config.url} />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/implicit/callback" element={<LoginCallback />} />
        <Route path="/favourite" element={<Favourites />} />
        <Route path="/user" element={<Dashboard />} />
        <Route path="/profile" element={<ProfilePage healthCards={healthCards} />} />
      </Routes>
    </>
  );
};

export default App;

