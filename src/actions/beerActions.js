import { beerActionTypes as actionTypes } from "./types";

// Safe optional AWS reference for platformapps telemetry fallback
const AWS = typeof window !== 'undefined' && window.AWS ? window.AWS : null;

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
const getPcdBaseUrl = (pcd_url) => {
  const base = pcd_url || process.env.REACT_APP_PCD_PATH || 'https://api.example.com/';
  return base.endsWith('/') ? base : `${base}/`;
};

// PlatformApps Circuit Breaker and Resilient Retry Mechanism
const MAX_RETRIES = 10;
const RETRY_DELAY = 5000; // 5 seconds

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let isPlatformAppsHalted = false;

const fetchPlatformAppsWithRetry = async (url, maxAttempts = MAX_RETRIES) => {
  if (isPlatformAppsHalted) {
    throw new Error("PlatformApps API requests are halted due to previous permanent failure.");
  }

  let lastError;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (error) {
      lastError = error;

      if (attempt === maxAttempts) {
        console.error(`[FINAL ATTEMPT ${attempt}/${maxAttempts}] Permanently failed: ${url}. Error: ${error.message}`);
        isPlatformAppsHalted = true; // Trip the circuit breaker for platformapps
        break;
      }

      console.warn(`[Attempt ${attempt}/${maxAttempts}] Failed: ${url}. Retrying in ${RETRY_DELAY / 1000}s...`);
      await sleep(RETRY_DELAY);
    }
  }
  throw lastError;
};

// PlatformApps Action Creators
export const fetchPlatformApps = (page = 1, pcd_url = process.env.REACT_APP_PCD_PATH) => async (dispatch, getState) => {
  if (page === 1) isPlatformAppsHalted = false; // Reset circuit breaker on page 1

  const state = (getState && getState().beer) || {};
  if (state.isLoading || isPlatformAppsHalted) return;

  dispatch({ type: actionTypes.FETCHING_PLATFORMAPPS, payload: { isLoading: true } });

  try {
    const baseUrl = getPcdBaseUrl(pcd_url);
    const url = `${baseUrl}api/people`;
    const platformapps = await fetchPlatformAppsWithRetry(url);
    dispatch({
      type: actionTypes.FETCH_PLATFORMAPPS,
      payload: { platformapps, page, isLoading: false, error: null }
    });
  } catch (error) {
    console.error("fetchPlatformApps failed permanently after max retries:", error);
    dispatch({
      type: actionTypes.FETCH_PLATFORMAPPS,
      payload: { platformapps: [], page, isLoading: false, error: "Failed to load platform applications." }
    });
  }
};

export const fetchMorePlatformApps = (page, pcd_url = process.env.REACT_APP_PCD_PATH) => async (dispatch, getState) => {
  const state = (getState && getState().beer) || {};
  if (state.isLoading || isPlatformAppsHalted) return;

  dispatch({ type: actionTypes.FETCHING_PLATFORMAPPS, payload: { isLoading: true } });

  try {
    const baseUrl = getPcdBaseUrl(pcd_url);
    const url = `${baseUrl}api/people/${page}`;
    const platformapps = await fetchPlatformAppsWithRetry(url);
    dispatch({
      type: actionTypes.FETCH_MORE_PLATFORMAPPS,
      payload: { platformapps, page, isLoading: false, error: null }
    });
  } catch (error) {
    console.error("fetchMorePlatformApps failed permanently after max retries:", error);
    dispatch({
      type: actionTypes.FETCH_MORE_PLATFORMAPPS,
      payload: { platformapps: [], page, isLoading: false, error: "Failed to load more platform applications." }
    });
  }
};

export const searchPlatformapps = (keyword, pcd_url = process.env.REACT_APP_PCD_PATH) => async (dispatch, getState) => {
  isPlatformAppsHalted = false; // Reset circuit breaker on search

  if ((getState && getState().beer?.isLoading) || isPlatformAppsHalted) return;

  dispatch({ type: actionTypes.FETCHING_PLATFORMAPPS, payload: { isLoading: true } });

  try {
    const baseUrl = getPcdBaseUrl(pcd_url);
    const url = `${baseUrl}api/people/${encodeURIComponent(keyword)}`;
    const platformapps = await fetchPlatformAppsWithRetry(url);
    dispatch({
      type: actionTypes.SEARCH_PLATFORMAPPS,
      payload: { platformapps, isLoading: false, error: null }
    });
  } catch (error) {
    console.error("searchPlatformapps failed permanently after max retries:", error);
    dispatch({
      type: actionTypes.SEARCH_PLATFORMAPPS,
      payload: { platformapps: [], isLoading: false, error: "Failed to search platform applications." }
    });
  }
};

export const handleFavouritePlatformapps = platformapp => dispatch =>
  dispatch({
    type: actionTypes.HANDLE_FAVOURITE_PLATFORMAPP,
    payload: { platformapp }
  });

export const displayPlatformapp = (platformapp, pcd_url = process.env.REACT_APP_PCD_PATH) => async (dispatch, getState) => {
  if ((getState && getState().beer?.isLoading) || isPlatformAppsHalted) return;

  dispatch({ type: actionTypes.FETCHING_PLATFORMAPPS, payload: { isLoading: true } });

  try {
    const baseUrl = getPcdBaseUrl(pcd_url);
    const id = platformapp.voteid || platformapp.id || '';
    const url = `${baseUrl}api/people/${encodeURIComponent(id)}`;
    const platformapps = await fetchPlatformAppsWithRetry(url);

    let selected = { ...platformapp, similar: platformapps };
    dispatch({
      type: actionTypes.DISPLAY_PLATFORMAPP,
      payload: { selected, isLoading: false }
    });
  } catch (error) {
    console.warn("API displayPlatformapp failed, checking S3 fallback:", error);

    if (AWS && process.env.REACT_APP_S3_BUCKET) {
      try {
        const s3 = new AWS.S3();
        const user = (getState && getState().user) || {};
        const email = user.email_verified || user.email || 'default';
        const params = {
          Bucket: process.env.REACT_APP_S3_BUCKET,
          Key: `${replaceCharacters(email)}/${formatDate(new Date())}_mockuser_chart_sleep.json`
        };

        s3.getObject(params, (err, data) => {
          if (err) {
            console.warn("S3 fallback failed:", err);
            dispatch({
              type: actionTypes.DISPLAY_PLATFORMAPP,
              payload: { selected: platformapp, isLoading: false }
            });
          } else {
            try {
              const platformapps = JSON.parse(data.Body.toString('utf-8'));
              let selected = { ...platformapp, similar: platformapps };
              dispatch({
                type: actionTypes.DISPLAY_PLATFORMAPP,
                payload: { selected, isLoading: false }
              });
            } catch (parseErr) {
              dispatch({
                type: actionTypes.DISPLAY_PLATFORMAPP,
                payload: { selected: platformapp, isLoading: false }
              });
            }
          }
        });
        return;
      } catch (s3InitErr) {
        console.warn("AWS S3 initialization error:", s3InitErr);
      }
    }

    dispatch({
      type: actionTypes.DISPLAY_PLATFORMAPP,
      payload: { selected: platformapp, isLoading: false }
    });
  }
};

// Beers with Circuit Breaker and Resilient Retry Mechanism
let isApiHalted = false;

const fetchWithRetry = async (url, maxAttempts = MAX_RETRIES) => {
  if (isApiHalted) {
    throw new Error("API requests are halted due to previous permanent failure.");
  }

  let lastError;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (error) {
      lastError = error;
      
      if (attempt === maxAttempts) {
        console.error(`[FINAL ATTEMPT ${attempt}/${maxAttempts}] Permanently failed: ${url}. Error: ${error.message}`);
        isApiHalted = true; // Trip the circuit breaker
        break;
      }

      console.warn(`[Attempt ${attempt}/${maxAttempts}] Failed: ${url}. Retrying in ${RETRY_DELAY / 1000}s...`);
      await sleep(RETRY_DELAY);
    }
  }
  throw lastError;
};

export const fetchBeers = (page = 1) => async (dispatch, getState) => {
  if (page === 1) isApiHalted = false; // Reset circuit breaker on a fresh page 1 load

  const state = (getState && getState().beer) || {};
  // Guard: Stop if already loading, if circuit is broken, or if we have an error
  if (state.isLoading || state.error || isApiHalted) return;

  dispatch({ type: actionTypes.FETCHING_BEERS, payload: { isLoading: true } });

  try {
    const url = `https://api.punkapi.com/v2/beers?page=${page}`;
    const beers = await fetchWithRetry(url);
    dispatch({
      type: actionTypes.FETCH_BEERS,
      payload: { beers, page, isLoading: false, error: null }
    });
  } catch (error) {
    console.error("fetchBeers failed permanently after max retries:", error);
    dispatch({
      type: actionTypes.FETCH_BEERS,
      payload: { beers: [], page, isLoading: false, error: "Failed to load beers after several attempts." }
    });
  }
};

export const fetchMoreBeers = page => async (dispatch, getState) => {
  const state = (getState && getState().beer) || {};
  // Guard: Prevent Page 2+ from starting if the circuit is broken
  if (state.isLoading || state.error || isApiHalted) return;

  dispatch({ type: actionTypes.FETCHING_BEERS, payload: { isLoading: true } });

  try {
    const url = `https://api.punkapi.com/v2/beers?page=${page}`;
    const beers = await fetchWithRetry(url);
    dispatch({
      type: actionTypes.FETCH_MORE_BEERS,
      payload: { beers, page, isLoading: false, error: null }
    });
  } catch (error) {
    console.error("fetchMoreBeers failed permanently after max retries:", error);
    dispatch({
      type: actionTypes.FETCH_MORE_BEERS,
      payload: { beers: [], page, isLoading: false, error: "Failed to load more data." }
    });
  }
};

export const searchBeers = keyword => async (dispatch, getState) => {
  isApiHalted = false; // Reset circuit breaker when user performs a new search

  // Prevent multiple simultaneous searches
  if ((getState && getState().beer?.isLoading) || isApiHalted) return;

  // dispatch loading state: true
  dispatch({ type: actionTypes.FETCHING_BEERS, payload: { isLoading: true } });

  try {
    const url = `https://api.punkapi.com/v2/beers?beer_name=${encodeURIComponent(keyword)}`;
    const beers = await fetchWithRetry(url);
    dispatch({
      type: actionTypes.SEARCH_BEERS,
      payload: { beers, isLoading: false }
    });
  } catch (error) {
    console.error("searchBeers failed permanently after max retries:", error);
    dispatch({ type: actionTypes.SEARCH_BEERS, payload: { beers: [], isLoading: false } });
  }
};

export const handleFavourite = beer => dispatch =>
  dispatch({
    type: actionTypes.HANDLE_FAVOURITE_BEER,
    payload: { beer }
  });

export const displayBeer = beer => async (dispatch, getState) => {
  // Prevent details fetch if circuit is broken
  if ((getState && getState().beer?.isLoading) || isApiHalted) return;

  // dispatch loading state: true
  dispatch({ type: actionTypes.FETCHING_BEERS, payload: { isLoading: true } });

  try {
    // fetch similar beers based on their yeast ingredient
    const yeast = encodeURIComponent(beer.ingredients.yeast);
    const url = `https://api.punkapi.com/v2/beers?per_page=3&yeast=${yeast}`;
    const beers = await fetchWithRetry(url);
    
    // compose selected beer and similar beers into bundle
    let selected = { ...beer, similar: beers };
    dispatch({
      type: actionTypes.DISPLAY_BEER,
      payload: { selected, isLoading: false }
    });
  } catch (error) {
    console.error("displayBeer failed permanently after max retries:", error);
    dispatch({
      type: actionTypes.DISPLAY_BEER,
      payload: { selected: beer, isLoading: false }
    });
  }
};
