import { beerActionTypes as actionTypes } from "./types";

// TODO: Add complete support for Standard and Premium NPM module loading to provide Pro features
// See https://github.com/HolimaX/React/issues/8 ( EDU-1 )
// See https://stackoverflow.com/questions/47444672/how-do-i-access-a-modules-method-in-react-from-another-module
// See https://stackoverflow.com/questions/61238680/access-to-fetch-at-from-origin-http-localhost3000-has-been-blocked-by-cors
// PlatformApps
export const fetchPlatformApps = (page = 1, pcd_url = process.env.PCD_PATH) => dispatch => {
  // dispatch loading state: true
  dispatch({ type: actionTypes.FETCHING_PLATFORMAPPS, payload: { isLoading: true } });
  //const pcd_url = "https://python-restful-api-250713.ew.r.appspot.com/"
  const url = `${pcd_url}api/people`;
  fetch(url)
    .then(res => res.json())
    .then(platformapps =>
      dispatch({
        type: actionTypes.FETCH_PLATFORMAPPS,
        payload: { platformapps, page, isLoading: false }
      })
    );
};

export const fetchMorePlatformApps = (page, pcd_url) => dispatch => {
  // dispatch loading state: true
  dispatch({ type: actionTypes.FETCHING_PLATFORMAPPS, payload: { isLoading: true } });
  //const pcd_url = "https://python-restful-api-250713.ew.r.appspot.com/"
  const url = `${pcd_url}api/people/${page}`;
  fetch(url)
    .then(res => res.json())
    .then(platformapps =>
      dispatch({
        type: actionTypes.FETCH_MORE_PLATFORMAPPS,
        payload: { platformapps, page, isLoading: false }
      })
    );
};

export const searchPlatformapps = (keyword, pcd_url) => dispatch => {
  // dispatch loading state: true
  dispatch({ type: actionTypes.FETCHING_PLATFORMAPPS, payload: { isLoading: true } });
  //const pcd_url = "https://python-restful-api-250713.ew.r.appspot.com/"
  const url = `${pcd_url}api/people/${keyword}`;
  fetch(url)
    .then(res => res.json())
    .then(platformapps => {
      dispatch({
        type: actionTypes.SEARCH_PLATFORMAPPS,
        payload: { platformapps, isLoading: false }
      });
    });
};

export const handleFavouritePlatformapps = platformapp => dispatch =>
  dispatch({
    type: actionTypes.HANDLE_FAVOURITE_PLATFORMAPP,
    payload: { platformapp }
  });

export const displayPlatformapp = (platformapp, pcd_url) => dispatch => {
  // dispatch loading state: true
  dispatch({ type: actionTypes.FETCHING_PLATFORMAPPS, payload: { isLoading: true } });

  // fetch similar beers based on their yeast ingredient
  //const pcd_url = "https://python-restful-api-250713.ew.r.appspot.com/"
  const url = `${pcd_url}api/people/${
    platformapp.voteid
  }`;

  fetch(url)  
    .then(res => res.json())
    .then(platformapps => {
      // compose selected beer and similar beers into bundle
      let selected = platformapp;
      selected.similar = platformapps;
      dispatch({
        type: actionTypes.DISPLAY_PLATFORMAPP,
        payload: { selected, isLoading: false }
      });
    });
};

// Beers
export const fetchBeers = (page = 1) => dispatch => {
  // dispatch loading state: true
  dispatch({ type: actionTypes.FETCHING_BEERS, payload: { isLoading: true } });

  const url = `https://api.punkapi.com/v2/beers?page=${page}`;
  fetch(url)
    .then(res => res.json())
    .then(beers =>
      dispatch({
        type: actionTypes.FETCH_BEERS,
        payload: { beers, page, isLoading: false }
      })
    );
};

export const fetchMoreBeers = page => dispatch => {
  // dispatch loading state: true
  dispatch({ type: actionTypes.FETCHING_BEERS, payload: { isLoading: true } });

  const url = `https://api.punkapi.com/v2/beers?page=${page}`;
  fetch(url)
    .then(res => res.json())
    .then(beers =>
      dispatch({
        type: actionTypes.FETCH_MORE_BEERS,
        payload: { beers, page, isLoading: false }
      })
    );
};

export const searchBeers = keyword => dispatch => {
  // dispatch loading state: true
  dispatch({ type: actionTypes.FETCHING_BEERS, payload: { isLoading: true } });

  const url = `https://api.punkapi.com/v2/beers?beer_name=${keyword}`;
  fetch(url)
    .then(res => res.json())
    .then(beers => {
      dispatch({
        type: actionTypes.SEARCH_BEERS,
        payload: { beers, isLoading: false }
      });
    });
};

export const handleFavourite = beer => dispatch =>
  dispatch({
    type: actionTypes.HANDLE_FAVOURITE_BEER,
    payload: { beer }
  });

export const displayBeer = beer => dispatch => {
  // dispatch loading state: true
  dispatch({ type: actionTypes.FETCHING_BEERS, payload: { isLoading: true } });

  // fetch similar beers based on their yeast ingredient
  const url = `https://api.punkapi.com/v2/beers?per_page=3&yeast=${
    beer.ingredients.yeast
  }`;

  fetch(url)
    .then(res => res.json())
    .then(beers => {
      // compose selected beer and similar beers into bundle
      let selected = beer;
      selected.similar = beers;
      dispatch({
        type: actionTypes.DISPLAY_BEER,
        payload: { selected, isLoading: false }
      });
    });
};
