import { combineReducers } from "redux";
import beerReducer from "./beerReducer";

// combine reducers into state
// <beer>: <beerReducer> defines state (initialState) via beerReducer switch
export default combineReducers({
  beer: beerReducer
});
