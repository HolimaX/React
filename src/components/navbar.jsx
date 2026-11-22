import React, { useEffect, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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
    <nav className="navbar navbar-expand fixed-top navbar-dark bg-warning shadow-sm" aria-label="Main navigation">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand font-weight-bold text-white">
          Beer Bank
        </Link>
        <div className="collapse navbar-collapse" id="navbarsExample02">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <NavLink end className={({ isActive }) => `nav-link text-white${isActive ? ' active' : ''}`} to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link text-white${isActive ? ' active' : ''}`} to="/favourite">Favourite</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link text-white${isActive ? ' active' : ''}`} to="/user">Dashboard</NavLink>
            </li>
            {authState?.isAuthenticated ? (
              <>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link text-white${isActive ? ' active' : ''}`} to="/profile">Profile</NavLink>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-link nav-link text-white" onClick={logout}>Logout</button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link text-white${isActive ? ' active' : ''}`} to="/login">Login</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

