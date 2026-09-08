import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { handleFavourite } from "../actions/beerActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ReactGA from 'react-ga4';

const Beer = ({ beer, favourites, handleFavourite, onDetail }) => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }, []);

  const isFavourite = favourites.indexOf(beer) !== -1;

  const onFavouriteToggle = e => {
    e.stopPropagation();
    handleFavourite(beer);
  };

  return (
    <div
      className="beer-item col-12 col-sm-6 col-md-4 p-3 text-center"
      onClick={() => onDetail && onDetail(beer)}
    >
      <div className="details bg-white p-3">
        <div className="row">
          <div className="col-12">
            <button
              className={
                "btn btn-link btn-fav float-right " +
                (isFavourite ? "active" : "")
              }
              onClick={onFavouriteToggle}
            >
              <FontAwesomeIcon icon="star" />
            </button>
          </div>
        </div>

        <div className="row my-1">
          <div className="col">
            <img
              src={beer.image_url}
              alt={beer.name}
              className="beer-thumbnail"
            />
          </div>
        </div>
        <h5 className="text-warning font-weight-bold">{beer.name}</h5>
        <p className="text-muted">{beer.tagline}</p>
      </div>
    </div>
  );
};

// redux stuff
Beer.propTypes = {
  favourites: PropTypes.array.isRequired,
  handleFavourite: PropTypes.func.isRequired,
  beer: PropTypes.object.isRequired,
  onDetail: PropTypes.func
};

const mapStateToProps = state => ({
  favourites: state.beer.favourites
});

export default connect(
  mapStateToProps,
  { handleFavourite }
)(Beer);

