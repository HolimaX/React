import React from "react";

const BeerDetails = ({ beer = {}, onClose }) => {
  const renderFoodPairing = () => {
    return beer.food_pairing?.map((item, key) => (
      <li key={key}>{item}</li>
    ));
  };

  const renderSimilarBeers = () => {
    return beer.similar?.map(similarBeer => (
      <div className="col-lg-4 text-center" key={similarBeer.id}>
        <div className="similar-beer m-1 p-3">
          <img
            src={similarBeer.image_url}
            alt={similarBeer.name}
            className="img-fluid d-block mx-auto"
          />
          <h6 className="font-weight-bold text-muted my-3">{similarBeer.name}</h6>
        </div>
      </div>
    ));
  };

  return (
    <div className="modal-body py-3">
      <button type="button" className="btn-close float-end" onClick={onClose} aria-label="Close" />

      <div className="row p-2 beer-detail">
        <div className="col-lg-3 mb-2 p-2">
          <img
            src={beer.image_url}
            alt={beer.name}
            className="img-fluid d-block mx-auto"
          />
        </div>
        <div className="col-lg-9 p-2">
          <h3 className="text-warning font-weight-bold">{beer.name}</h3>
          <h5 className="beer-tagline">{beer.tagline}</h5>

          <div className="divider my-2" />

          <ul className="list-inline">
            <li className="list-inline-item">
              <strong>IBU:</strong> {beer.ibu}
            </li>
            <li className="list-inline-item">
              <strong>ABV:</strong> {beer.abv + "%"}
            </li>
            <li className="list-inline-item">
              <strong>EBC:</strong> {beer.ebc}
            </li>
          </ul>

          <p className="my-3">{beer.description}</p>

          <h5 className="text-muted">Best served with:</h5>
          <ul>{beer.food_pairing && renderFoodPairing()}</ul>
        </div>
      </div>

      <div className="row align-items-center p-2">
        <div className="col">
          <h4 className="my-2 text-warning">You might also like:</h4>
          <div className="row">
            {beer.similar && renderSimilarBeers()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerDetails;

