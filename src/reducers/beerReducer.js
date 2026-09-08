import { beerActionTypes as actionTypes } from "../actions/types";

const initialState = {
  platformapps: [],
  beers: [],
  favourites: [],
  selected: {
    beer: {},
    platformapp: {},
    similar: []
  },
  page: 1,
  isLoading: false,
  error: null,
  searchQuery: ""
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_BEERS:
      return {
        ...state,
        beers: action.payload.beers,
        page: action.payload.error ? state.page : action.payload.page + 1,
        isLoading: action.payload.isLoading,
        error: action.payload.error || null
      };

    case actionTypes.FETCHING_BEERS:
      return { ...state, isLoading: action.payload.isLoading };

    case actionTypes.FETCH_MORE_BEERS:
      return {
        ...state,
        beers: action.payload.error ? state.beers : [...state.beers, ...action.payload.beers],
        page: action.payload.error ? state.page : action.payload.page + 1,
        isLoading: action.payload.isLoading,
        error: action.payload.error || null
      };

    case actionTypes.SEARCH_BEERS:
      return {
        ...state,
        beers: action.payload.beers,
        isLoading: action.payload.isLoading,
        error: null
      };

    case actionTypes.HANDLE_FAVOURITE_BEER:
      // grab favourites from state
      let favourites = [...state.favourites];
      let favBeer = action.payload.beer;

      // check if beer is in favourites
      if (favourites.indexOf(favBeer) !== -1) {
        favourites = favourites.filter(item => item !== favBeer); // yes? remove it
      } else favourites.push(favBeer); // no? add it

      return { ...state, favourites: favourites };

    case actionTypes.DISPLAY_BEER:
      return { ...state, selected: action.payload.selected, isLoading: false };

    case actionTypes.FETCH_PLATFORMAPPS:
      return {
        ...state,
        platformapps: action.payload.platformapps || [],
        page: action.payload.error ? state.page : action.payload.page + 1,
        isLoading: action.payload.isLoading,
        error: action.payload.error || null
      };

    case actionTypes.FETCHING_PLATFORMAPPS:
      return { ...state, isLoading: action.payload.isLoading };

    case actionTypes.FETCH_MORE_PLATFORMAPPS:
      return {
        ...state,
        platformapps: action.payload.error
          ? state.platformapps
          : [...state.platformapps, ...(action.payload.platformapps || [])],
        page: action.payload.error ? state.page : action.payload.page + 1,
        isLoading: action.payload.isLoading,
        error: action.payload.error || null
      };

    case actionTypes.SEARCH_PLATFORMAPPS:
      return {
        ...state,
        platformapps: action.payload.platformapps || [],
        isLoading: action.payload.isLoading,
        error: action.payload.error || null
      };

    case actionTypes.HANDLE_FAVOURITE_PLATFORMAPP:
      let favList = [...state.favourites];
      let favApp = action.payload.platformapp;
      const favAppIndex = favList.findIndex(
        item => (item.voteid || item.id) === (favApp.voteid || favApp.id)
      );
      if (favAppIndex !== -1) {
        favList.splice(favAppIndex, 1);
      } else {
        favList.push(favApp);
      }
      return { ...state, favourites: favList };

    case actionTypes.DISPLAY_PLATFORMAPP:
      return { ...state, selected: action.payload.selected, isLoading: false };

    case actionTypes.FETCHING_PLATFORMAPPS_ERROR:
      return { ...state, isLoading: false, error: action.payload.error };

    default:
      console.warn('Default Action Type fired in Beer Reducer');
      return state;
  }
}
