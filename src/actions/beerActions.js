import AWS from 'aws-sdk';

import { beerActionTypes as actionTypes } from "./types";

// TODO: Move Utilities to seperate location
const replaceCharacters = (str) => {
  return str.replace(/\./g, '_').replace(/@/g, '-at-');
};

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const year = date.getFullYear();
  return `${day}${month}${year}`;
};

// TODO: Add complete support for Standard and Premium NPM module loading to provide Pro features
// See https://github.com/HolimaX/React/issues/8 ( EDU-1 )
// See https://stackoverflow.com/questions/47444672/how-do-i-access-a-modules-method-in-react-from-another-module
// See https://stackoverflow.com/questions/61238680/access-to-fetch-at-from-origin-http-localhost3000-has-been-blocked-by-cors
// PlatformApps
export const fetchPlatformApps = (page = 1, pcd_url = process.env.REACT_APP_PCD_PATH) => dispatch => {
  // dispatch loading state: true
  dispatch({ type: actionTypes.FETCHING_PLATFORMAPPS, payload: { isLoading: true } });

  //const pcd_url = "https://python-restful-api-250713.ew.r.appspot.com/"
  // Set default URL if not provided or if process.env.PCD_PATH is null or empty
  if (!pcd_url || !process.env.REACT_APP_PCD_PATH) {
    pcd_url = "https://python-restful-api-250713.ew.r.appspot.com/";
  } else {
    pcd_url = process.env.REACT_APP_PCD_PATH;
  }

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

export const fetchMorePlatformApps = (page, pcd_url = process.env.REACT_APP_PCD_PATH) => dispatch => {
  // dispatch loading state: true
  dispatch({ type: actionTypes.FETCHING_PLATFORMAPPS, payload: { isLoading: true } });

  //const pcd_url = "https://python-restful-api-250713.ew.r.appspot.com/"
  // Set default URL if not provided or if process.env.PCD_PATH is null or empty
  if (!pcd_url || !process.env.REACT_APP_PCD_PATH) {
    pcd_url = "https://python-restful-api-250713.ew.r.appspot.com/";
  } else {
    pcd_url = process.env.REACT_APP_PCD_PATH;
  }

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

export const searchPlatformapps = (keyword, pcd_url = process.env.REACT_APP_PCD_PATH) => dispatch => {
  // dispatch loading state: true
  dispatch({ type: actionTypes.FETCHING_PLATFORMAPPS, payload: { isLoading: true } });
  
  //const pcd_url = "https://python-restful-api-250713.ew.r.appspot.com/"
  // Set default URL if not provided or if process.env.PCD_PATH is null or empty
  if (!pcd_url || !process.env.REACT_APP_PCD_PATH) {
    pcd_url = "https://python-restful-api-250713.ew.r.appspot.com/";
  } else {
    pcd_url = process.env.REACT_APP_PCD_PATH;
  }

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

export const displayPlatformapp = (platformapp, pcd_url = process.env.REACT_APP_PCD_PATH) => dispatch => {
  // Dispatch loading state: true
  dispatch({ type: actionTypes.FETCHING_PLATFORMAPPS, payload: { isLoading: true } });

  // Set default URL if not provided or if process.env.PCD_PATH is null or empty
  if (!pcd_url || !process.env.REACT_APP_PCD_PATH) {
    pcd_url = "https://python-restful-api-250713.ew.r.appspot.com/";
  } else {
    pcd_url = process.env.REACT_APP_PCD_PATH;
  }

  const url = `${pcd_url}api/people/${platformapp.voteid}`;

  fetch(url)
    .then(res => res.json())
    .then(platformapps => {
      // Compose selected platform app and similar apps into a bundle
      let selected = platformapp;
      selected.similar = platformapps;
      dispatch({
        type: actionTypes.DISPLAY_PLATFORMAPP,
        payload: { selected, isLoading: false }
      });
    })
    .catch(error => {
      console.error('Error fetching platform apps:', error);

      // Fallback to AWS S3
      const s3 = new AWS.S3();
      const params = {
        Bucket: process.env.REACT_APP_S3_BUCKET, // Replace with your bucket name
        Key: replaceCharacters(this.state.user.email_verified) + '/' + formatDate(new Date()) + '_mockuser_chart_sleep.png' // Replace with the path to your JSON file
      };
    
      s3.getObject(params, (err, data) => {
        if (err) {
          console.error('Error fetching from S3:', err);
          dispatch({
            type: actionTypes.FETCHING_PLATFORMAPPS_ERROR,
            payload: { isLoading: false, error: err }
          });
        } else {
          const platformapps = JSON.parse(data.Body.toString('utf-8'));
          let selected = platformapp;
          selected.similar = platformapps;
          dispatch({
            type: actionTypes.DISPLAY_PLATFORMAPP,
            payload: { selected, isLoading: false }
          });
        }
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
