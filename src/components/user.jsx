import React, { Component } from "react";
//import PropTypes from "prop-types";
import Navigation from "./shared/Navigation.js";
//import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return (
      <>
        <Navigation/>
        <header className="justify-content-center py-2 bg-warning text-center text-white">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="font-weight-bold">The Cloud Dashboard | User</h1>
                <p>Please <strong>Log-In</strong> to view your available resources!</p>
              </div>
            </div>
          </div>
        </header>
        <section>
          <div>
            <p>Currently these resources are available for general use:</p>
            <ul>
              <li>Data Source Visualizer (<abbr>DSV</abbr>)</li>
              <li>Health Dashboard (<abbr>PCD</abbr>)</li>
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default Dashboard;

// Node.js syntax: export user dashboard to allow custom use
//module.exports.createCoreUserDashboardPage = Dashboard;
