import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import ReactGA from 'react-ga4';

export function componentIdentityDescriptionAH(REACT_APP_COMPONENT_VERSION, REACT_APP_COMPONENT_NAME) {
  return `<div>${REACT_APP_COMPONENT_VERSION}</div><div>${REACT_APP_COMPONENT_NAME}</div><div><p>This functionality is not yet supported!</p></div>`;
}

const Navigation = () => {
  const { oktaAuth, authState } = useOktaAuth();

  const logout = useCallback(() => {
    if (oktaAuth?.signOut) {
      oktaAuth.signOut();
    }
  }, [oktaAuth]);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }, []);

  if (!authState) return null;

  const authNav = authState.isAuthenticated ? (
    <>
      <li className="nav-item">
        <Link className="nav-link font-weight-bold" to="/profile">Profile</Link>
      </li>
      <li className="nav-item">
        <button className="btn btn-link nav-link text-warning" onClick={logout}>Logout</button>
      </li>
    </>
  ) : (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-warning font-weight-bold" to="/register">Register</Link>
      </li>
    </>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-warning font-weight-bold">
          {authState.isAuthenticated ? <><abbr title="Personalized Cloud Dashboard">PCD</abbr> Home</> : <><abbr title="Cloud Dashboard">CD</abbr> Home</>}
        </Link>
        <ul className="navbar-nav ms-auto align-items-center">
          {authNav}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;