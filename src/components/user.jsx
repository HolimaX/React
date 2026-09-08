import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "./shared/Navigation.js";
import { useOktaAuth } from '@okta/okta-react';
import { Alert } from 'react-bootstrap';
import ReactGA from 'react-ga4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dashboard = () => {
  const location = useLocation();
  const { authState } = useOktaAuth();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return (
    <>
      <Navigation />
      <header className="justify-content-center py-2 bg-warning text-center text-white shadow-sm mt-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="font-weight-bold">
                HolimaX Product Ecosystem | {authState?.isAuthenticated ? <>Personalized Cloud Dashboard (<abbr title="Personalized Cloud Dashboard">PCD</abbr>)</> : <>The Cloud Dashboard (<abbr title="Cloud Dashboard">CD</abbr>)</>}
              </h1>
              <p>
                Version {process.env.REACT_APP_VERSION || '0.1.20'} - Please{" "}
                <Link to="/login" className="text-white text-decoration-underline fw-bold">Login</Link>{" "}
                to view your personalized resources!
              </p>
            </div>
          </div>
        </div>
      </header>
      <section className="py-5 bg-light">
        <div className="container">
          <Alert variant="warning" className="shadow-sm border-0 mb-5 fw-light">
            <FontAwesomeIcon icon="exclamation-triangle" className="me-2" />
            <strong>Ecosystem Notice:</strong> If you have access to the <strong>Personalized Cloud Dashboard (<abbr title="Personalized Cloud Dashboard">PCD</abbr>)</strong>, but are currently utilizing the standard <strong>Cloud Dashboard (<abbr title="Cloud Dashboard">CD</abbr>)</strong> interface, certain premium data synchronization features and advanced analytical modules will remain unused.
          </Alert>

          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm border-0 rounded-lg text-center p-4">
                <div className="text-warning mb-3 display-4"><FontAwesomeIcon icon="mobile-alt" /></div>
                <h5 className="font-weight-bold">Mobile Application</h5>
                <p className="small text-muted">Flagship mobile client for real-time telemetry tracking and synchronization.</p>
                <div className="mt-auto">
                  <span className="badge bg-secondary">Android Companion</span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm border-0 rounded-lg text-center p-4">
                <div className="text-warning mb-3 display-4"><FontAwesomeIcon icon="cloud" /></div>
                <h5 className="font-weight-bold">Cloud Dashboard (<abbr title="Personalized Cloud Dashboard">PCD</abbr>)</h5>
                <p className="small text-muted">Personalized data synchronization and management portal for authenticated users.</p>
                <div className="mt-auto">
                  <span className="badge bg-primary">Cloud Core</span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm border-0 rounded-lg text-center p-4">
                <div className="text-warning mb-3 display-4"><FontAwesomeIcon icon="chart-bar" /></div>
                <h5 className="font-weight-bold">Visualizer (<abbr title="Data Source Visualizer">DSV</abbr>)</h5>
                <p className="small text-muted">Advanced visualization engine for cross-platform health and activity metrics.</p>
                <div className="mt-auto">
                  <span className="badge bg-success">Telemetry Visualizer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;

