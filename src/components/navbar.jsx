import React, { useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import ReactGA from 'react-ga4';

const Navbar = () => {
  const location = useLocation();
  const { authState, oktaAuth } = useOktaAuth();

  const logout = useCallback(() => {
    if (oktaAuth?.signOut) {
      oktaAuth.signOut();
    }
  }, [oktaAuth]);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return (
    <nav className="navbar navbar-expand fixed-top navbar-dark bg-warning shadow-sm">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand font-weight-bold text-white">
          Beer Bank
        </Link>
        <div className="collapse navbar-collapse" id="navbarsExample02">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/favourite">Favourite</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/user">Dashboard</Link>
            </li>
            {authState?.isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link text-white" onClick={logout}>Logout</button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link text-white" to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

