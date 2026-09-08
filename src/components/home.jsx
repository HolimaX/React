import React, { useEffect, useCallback, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useOktaAuth } from '@okta/okta-react';

import AdSense from 'react-adsense';
import { 
  FacebookShareButton, 
  LinkedinShareButton, 
  TelegramShareButton, 
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon
} from 'react-share';

import { fetchBeers, fetchMoreBeers, fetchPlatformApps, fetchMorePlatformApps } from "../actions/beerActions";
import Search from "./search";
import Beers from "./beers";
import gitInfo from './../gitInfo.json';

const Home = ({
  beers,
  platformapps,
  page,
  isLoading,
  error,
  searchQuery,
  fetchBeers,
  fetchMoreBeers,
  fetchPlatformApps,
  fetchMorePlatformApps
}) => {
  const { authState } = useOktaAuth();
  const [attempts, setAttempts] = useState(0);
  const [isGivingUp, setIsGivingUp] = useState(false);

  useEffect(() => {
    // load platformapps and beers if none are found in state
    if (platformapps && platformapps.length === 0) {
      fetchPlatformApps(page);
    }
    if (beers && beers.length === 0) {
      fetchBeers(page);
    }
  }, [platformapps, beers, fetchPlatformApps, fetchBeers, page, isGivingUp]);

  useEffect(() => {
    // Reset retry logic if data is successfully loaded
    if (beers && beers.length > 0 && (attempts > 0 || isGivingUp)) {
      setAttempts(0);
      setIsGivingUp(false);
    }
  }, [beers, attempts, isGivingUp]);

  useEffect(() => {
    // If there is an error and we haven't exhausted retries, start a 30s timer
    if (error && attempts < 5 && !isLoading) {
      const timer = setTimeout(() => {
        console.info(`Retry attempt ${attempts + 1} for catalog data...`);
        setAttempts(prev => prev + 1);
        fetchBeers(page);
      }, 30000);

      return () => clearTimeout(timer);
    }

    // If we reached 5 attempts and still have an error, give up
    if (error && attempts >= 5) {
      setIsGivingUp(true);
    }
  }, [error, attempts, isLoading, fetchBeers, page]);

  const onScroll = useCallback(() => {
    if (isLoading) return;

    if (
      window.innerHeight + document.documentElement.scrollTop >
      document.documentElement.offsetHeight - 100
    ) {
      fetchMoreBeers(page);
      if (fetchMorePlatformApps) {
        fetchMorePlatformApps(page);
      }
    }
  }, [isLoading, fetchMoreBeers, fetchMorePlatformApps, page]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, false);
    return () => window.removeEventListener("scroll", onScroll, false);
  }, [onScroll]);

  const enableAds = process.env.REACT_APP_ENABLE_ADS === 'true';

  return (
    <>
      <header className="justify-content-center py-2 bg-warning text-center text-white">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="font-weight-bold">
                Beer Bank | {authState?.isAuthenticated ? 'The Personalized Cloud Dashboard' : 'The Cloud Dashboard'} {process.env.REACT_APP_VERSION || ''}
              </h1>
              {gitInfo && (
                <label className="d-block small text-dark opacity-75">
                  {gitInfo.remoteRepoPath} (Supported apps: {gitInfo.branch}/{gitInfo.shortHash})
                </label>
              )}
              <p>Find your favourite beer here (or open your personalized dashboard to access your available services)</p>
            </div>
          </div>
          <Search />
          <div className="d-flex justify-content-center gap-2 mt-3">
            <TwitterShareButton url={window.location.href}><TwitterIcon size={32} round /></TwitterShareButton>
            <FacebookShareButton url={window.location.href}><FacebookIcon size={32} round /></FacebookShareButton>
            <TelegramShareButton url={window.location.href}><TelegramIcon size={32} round /></TelegramShareButton>
            <LinkedinShareButton url={window.location.href}><LinkedinIcon size={32} round /></LinkedinShareButton>
          </div>
        </div>
      </header>

      <Beers
        beers={beers}
        platformapps={platformapps}
        isLoading={isLoading}
        error={error}
        searchQuery={searchQuery}
        isGivingUp={isGivingUp}
        retryCount={attempts}
      />

      {enableAds && process.env.REACT_APP_GADS_ID && (
        <div className="container text-center my-4">
          <AdSense.Google
            client={process.env.REACT_APP_GADS_ID}
            slot={process.env.REACT_APP_GADS_SLOT || ''}
            style={{ display: 'block' }}
            format='auto'
            responsive='true'
          />
        </div>
      )}
    </>
  );
};

Home.propTypes = {
  fetchBeers: PropTypes.func.isRequired,
  fetchMoreBeers: PropTypes.func.isRequired,
  beers: PropTypes.array.isRequired,
  fetchPlatformApps: PropTypes.func.isRequired,
  fetchMorePlatformApps: PropTypes.func.isRequired,
  platformapps: PropTypes.array,
  page: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  searchQuery: PropTypes.string
};

const mapStateToProps = state => ({
  beers: state.beer.beers,
  platformapps: state.beer.platformapps,
  page: state.beer.page,
  isLoading: state.beer.isLoading,
  error: state.beer.error,
  searchQuery: state.beer.searchQuery
});

export default connect(
  mapStateToProps,
  { fetchBeers, fetchMoreBeers, fetchPlatformApps, fetchMorePlatformApps }
)(Home);

