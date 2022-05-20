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
                <h1 className="font-weight-bold">The Cloud Dashboard</h1>
                <p>Please Log-In to view your available resources!</p>
              </div>
            </div>
          </div>
        </header>
        <section>
          <div>
            <p>Currently these resources are available for general use:</p>
            <ul>
              <li>Data Source Visualizer</li>
              <li>Health Dashbaord</li>
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
