import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { fetchBeers, fetchMoreBeers, fetchPlatformApps, fetchMorePlatformApps } from "../actions/beerActions";
import Search from "./search";
import Beers from "./beers";

import gitInfo from '../gitInfo.json';

class Home extends Component {
  componentWillMount() {
    // load apps and beers if none are found in state
    if (this.props.platformapps && this.props.platformapps.length === 0) 
      this.props.fetchPlatformApps(this.props.page);
    if (this.props.beers && this.props.beers.length === 0) 
      this.props.fetchBeers(this.props.page);
  }

  componentDidMount() {
    // add scroll listener when component mounts
    window.addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    // remove scroll listener when component is unmounting
    window.removeEventListener("scroll", this.onScroll, false);
  }

  onScroll = () => {
    // exit function if beers are currently being loaded
    if (this.props.isLoading) return;

    // check if scroll is at the bottom of the page
    if (
      window.innerHeight + document.documentElement.scrollTop >
      document.documentElement.offsetHeight - 20
    ) {
      // load more beers and append to state
      this.props.fetchMoreBeers(this.props.page);
      this.props.fetchMorePlatformApps(this.props.page);
    }
  };

  render() {
    return (
      <>
        <CookieConsent
          location="bottom"
          buttonText="I understand and Aggree"
          cookieName="CD12_CookieAcceptv12022"
          style={{ background: "#2B373B", opacity: "0.8" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          This website uses cookies and data to enhance the user experience. By clicking 'I understand and Aggree', you aggree to terms, described in:{" "}
          <span style={{ fontSize: "10px" }}><a href="https://linardsliepins.files.wordpress.com/2021/03/confidentiality-policy-pdf-v1y2021.pdf#view=fitH">Privacy Policy</a>&nbsp;|&nbsp;<a href="https://linardsliepins.files.wordpress.com/2021/03/confidentiality-policy-pdf-v1y2021.pdf#view=fitH">Cookie Policy / ToC</a></span>
        </CookieConsent>
        <header className="justify-content-center py-2 bg-warning text-center text-white">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="font-weight-bold">Beer Bank | The Cloud Dashboard</h1>
                <label>{gitInfo.remoteRepoPath} (Supported apps: {gitInfo.branch}/{gitInfo.shortHash})</label>
                <p>Find your favourite beer here</p>
              </div>
            </div>
            <Search />
          </div>
        </header>
        
        <Beers beers={this.props.beers} platformapps={this.props.platformapps}/>
      </>
    );
  }
}

// redux stuff
Home.propTypes = {
  fetchBeers: PropTypes.func.isRequired,
  fetchMoreBeers: PropTypes.func.isRequired,
  beers: PropTypes.array.isRequired,
  fetchPlatformApps: PropTypes.func.isRequired,
  fetchMorePlatformApps: PropTypes.func.isRequired,
  platformapps: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  // comment out to disable usage of beer app from redux reducer in redurcers/index.js
  beers: state.beer.beers,
  // comment out to disable usage of platform app from redux reducer in redurcers/index.js
  platformapps: state.beer.platformapps,
  page: state.beer.page,
  isLoading: state.beer.isLoading
});

export default connect(
  mapStateToProps,
  { fetchBeers, fetchMoreBeers, fetchPlatformApps, fetchMorePlatformApps }
)(Home);

// Node.js syntax: export home dashboard to allow custom use
//module.exports.createCoreHomeDashboardPage = Home;
