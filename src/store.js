import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

// configure store
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

// Node.js syntax: export store constant to allow custom use
//module.exports.createCoreRSSFeedStorePage = store;
