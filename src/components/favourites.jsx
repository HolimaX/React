import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useOktaAuth } from '@okta/okta-react';

import ReactGA from 'react-ga4';
import Beers from "./beers";

const Favourites = ({ favourites = [] }) => {
  const { authState } = useOktaAuth();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }, []);

  return (
    <>
      <header className="justify-content-center py-2 bg-warning text-center text-white">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="font-weight-bold">
                Beer Bank | {authState?.isAuthenticated ? 'The Personalized Cloud Dashboard' : 'The Cloud Dashboard'} {process.env.REACT_APP_VERSION || ''}
              </h1>
              <p>These are your favourite beers</p>
            </div>
          </div>
        </div>
      </header>
      <Beers beers={favourites} platformapps={favourites} />
    </>
  );
};

// redux stuff
Favourites.propTypes = {
  favourites: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  favourites: state.beer.favourites
});

export default connect(
  mapStateToProps,
  {}
)(Favourites);

