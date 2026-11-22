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

  const handleCardKeyDown = e => {
    if (e.target !== e.currentTarget) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (onDetail) {
        onDetail(beer);
      }
    }
  };

  const favLabel = isFavourite
    ? `Remove ${beer.name} from favourites`
    : `Add ${beer.name} to favourites`;

  return (
    <div
      className="beer-item col-12 col-sm-6 col-md-4 p-3 text-center"
      onClick={() => onDetail && onDetail(beer)}
      onKeyDown={handleCardKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${beer.name}`}
    >
      <div className="details bg-white p-3">
        <div className="row">
          <div className="col-12">
            <button
              type="button"
              className={
                "btn btn-link btn-fav float-right " +
                (isFavourite ? "active" : "")
              }
              onClick={onFavouriteToggle}
              onKeyDown={e => e.stopPropagation()}
              aria-label={favLabel}
              aria-pressed={isFavourite}
              title={favLabel}
            >
              <FontAwesomeIcon icon="star" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="row my-1">
          <div className="col">
            <img
              src={beer.image_url}
              alt={beer.name || "Catalog item thumbnail"}
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

