import React, { useState } from "react";
import Beer from "./beer";
import BeerDetails from "./beer-details";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { displayBeer, displayPlatformapp } from "../actions/beerActions";

import { Modal, Alert, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Beers = ({
  beers = [],
  platformapps = [],
  displayBeer,
  displayPlatformapp,
  selected = {},
  isLoading = false,
  error = null,
  searchQuery = "",
  isGivingUp = false,
  retryCount = 0
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const displayDetails = beer => {
    displayBeer(beer);
    setModalIsOpen(true);
  };

  const displayPlatformAppDetails = platformapp => {
    if (displayPlatformapp) {
      displayPlatformapp(platformapp);
    } else {
      displayBeer(platformapp);
    }
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const renderPlatformApps = () => {
    if (!platformapps || platformapps.length === 0) return null;

    return (
      <div className="row row-eq-height py-3">
        <div className="col-12 mb-2">
          <h4 className="text-secondary font-weight-bold">Platform Applications</h4>
        </div>
        {platformapps.map(platformapp => (
          <Beer
            key={platformapp.voteid || platformapp.id}
            beer={platformapp}
            onDetail={displayPlatformAppDetails}
          />
        ))}
      </div>
    );
  };

  const renderBeersList = () => {
    if (isGivingUp) {
      return (
        <div className="col-12">
          <Alert variant="danger" className="shadow-sm border-0 my-4 text-center">
            <FontAwesomeIcon icon="exclamation-triangle" className="me-2 text-danger" size="2x" />
            <h4 className="alert-heading font-weight-bold mt-2">Temporary Service Disruption</h4>
            <p className="lead">Despite multiple consecutive attempts, metrics could not be retrieved at this time.</p>
            <hr />
            <p className="mb-0 small text-muted">
              The external API service is currently unresponsive. Please try refreshing this page in a few minutes.
            </p>
          </Alert>
        </div>
      );
    }

    if (error) {
      return (
        <div className="col-12">
          <Alert variant="warning" className="shadow-sm border-0">
            <FontAwesomeIcon icon="exclamation-triangle" className="me-2" />
            <strong>Service Connectivity Issue:</strong> {error}.{" "}
            {isLoading && <Spinner animation="border" size="sm" variant="dark" className="ms-2" />}
            <br />
            <small className="text-dark">Retry attempt {retryCount}/5 will occur automatically...</small>
          </Alert>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="col-12 text-center my-5">
          <Spinner animation="border" variant="warning" className="mb-2" />
          <p className="text-muted">Retrieving catalog data...</p>
        </div>
      );
    }

    if (beers.length === 0) {
      return (
        <div className="col-12 my-5 text-center fade-in">
          <FontAwesomeIcon className="beer-icon" icon="beer" size="5x" />
          <h4 className="mt-4 text-muted font-weight-light">
            {searchQuery
              ? `No records found for "${searchQuery}"`
              : "No items available in the current view."}
          </h4>
        </div>
      );
    }

    return beers.map(beer => (
      <Beer key={beer.id} beer={beer} onDetail={displayDetails} />
    ));
  };

  return (
    <>
      <div className="container">
        {renderPlatformApps()}
        <div className="row row-eq-height py-5">{renderBeersList()}</div>
      </div>

      <Modal show={modalIsOpen} onHide={closeModal} size="lg">
        {modalIsOpen && !isLoading && (
          <BeerDetails beer={selected} onClose={closeModal} />
        )}
      </Modal>
    </>
  );
};

Beers.propTypes = {
  displayBeer: PropTypes.func.isRequired,
  displayPlatformapp: PropTypes.func,
  selected: PropTypes.object.isRequired,
  beers: PropTypes.array,
  platformapps: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  searchQuery: PropTypes.string,
  isGivingUp: PropTypes.bool,
  retryCount: PropTypes.number
};

const mapStateToProps = state => ({
  selected: state.beer.selected,
  isLoading: state.beer.isLoading,
  error: state.beer.error,
  searchQuery: state.beer.searchQuery
});

export default connect(
  mapStateToProps,
  { displayBeer, displayPlatformapp }
)(Beers);

