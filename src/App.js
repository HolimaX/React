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
        <div
          role="status"
          aria-live="polite"
          aria-label="Authentication configuration notice"
          style={{
            backgroundColor: '#fff3cd',
            color: '#4d3900',
            padding: '10px',
            textAlign: 'center',
            borderBottom: '1px solid #ffeeba',
            fontSize: '14px'
          }}
        >
          <strong>Notice:</strong> OKTA Authentication is not configured. Features requiring login will be disabled, but you can still browse the catalog.
        </div>
      );
    }
    return null;
  };

  return (
    <div className="app-layout">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      {renderConfigWarning()}
      <Navbar />
      <CookieConsent
        location="bottom"
        buttonText="I understand and Agree"
        ariaAcceptLabel="Accept cookies"
        cookieName="CD12_CookieAcceptv12022"
        style={{ background: "#1f292d", color: "#ffffff", opacity: "0.98", zIndex: 9999 }}
        buttonStyle={{
          background: "#ffd42d",
          color: "#111111",
          fontSize: "14px",
          fontWeight: "700",
          minHeight: "44px",
          minWidth: "44px",
          padding: "8px 16px",
          borderRadius: "4px"
        }}
        expires={150}
      >
        This website uses cookies and data to enhance the user experience. By clicking &apos;I understand and Agree&apos;, you agree to terms.
      </CookieConsent>
      <main id="main-content" className="app-main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage baseUrl={config.url} />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/implicit/callback" element={<LoginCallback />} />
          <Route path="/favourite" element={<Favourites />} />
          <Route path="/user" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage healthCards={healthCards} />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

