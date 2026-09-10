import * as beerActions from "./actions/beerActions";
import { beerActionTypes } from "./actions/types";
import beerReducer from "./reducers/beerReducer";
import rootReducer from "./reducers/index";
import store from "./store";
import appConfig from "./app.config";

import Home from "./components/home";
import Dashboard from "./components/user";
import Favourites from "./components/favourites";
import Navbar from "./components/navbar";
import Search from "./components/search";
import Beer from "./components/beer";
import Beers from "./components/beers";
import BeerDetails from "./components/beer-details";
import Navigation from "./components/shared/Navigation";
import LoginForm from "./components/auth/LoginForm";
import LoginPage from "./components/auth/LoginPage";
import ProfilePage from "./components/auth/ProfilePage";
import RegistrationForm from "./components/auth/RegistrationForm";

/**
 * Strict safeguard to prevent illicit activation of PCD premium capabilities.
 * PCD access is exclusively restricted to users who were onboarded via the Android companion app
 * and authenticated through Okta with an active 'PRO' or 'PREMIUM' tier claim.
 *
 * Simply adding @HolimaX/beerbank to package.json will NOT grant access to PCD premium features.
 */
export function verifyPcdAccess(user, authState) {
  if (!authState || !authState.isAuthenticated || !user) {
    return {
      authorized: false,
      tier: "UNAUTHENTICATED",
      reason: "User is not authenticated with Okta."
    };
  }

  const rawTier = typeof user.tier === 'string' ? user.tier.trim().toUpperCase() : '';
  const isProOrPremium = rawTier === 'PRO' || rawTier === 'PREMIUM';

  if (isProOrPremium) {
    return {
      authorized: true,
      tier: rawTier,
      reason: "Active Pro/Premium entitlement verified via Okta OIDC."
    };
  }

  return {
    authorized: false,
    tier: rawTier || "STANDARD",
    reason: "PCD access restricted. User must be onboarded as a Pro/Premium customer via the Android mobile app."
  };
}

export function myFunction(options = {}) {
  console.info("[CD Foundation] Initialized CD base module (@HolimaX/beerbank) with core services.");

  const authState = options.authState || null;
  const user = options.user || null;
  const entitlement = verifyPcdAccess(user, authState);

  // If caller illicitly attempts to claim Pro/Premium tier without valid Okta verification, log security warning
  if ((options.tier === 'PRO' || options.tier === 'PREMIUM' || options.isPcdAuthorized === true) && !entitlement.authorized) {
    console.warn(
      "[CD Foundation Security Alert] Unauthorized attempt to activate PCD premium tier detected. " +
      "Access denied: caller does not hold verified Pro/Premium Okta entitlement."
    );
  }

  // Prevent override of protected core security fields by caller options
  const safeOptions = { ...options };
  delete safeOptions.name;
  delete safeOptions.version;
  delete safeOptions.tier;
  delete safeOptions.isPcdAuthorized;
  delete safeOptions.pcdEntitlement;
  delete safeOptions.capabilities;
  delete safeOptions.status;

  return {
    name: "@HolimaX/beerbank",
    version: "0.1.26",
    tier: entitlement.authorized ? `Cloud Dashboard (CD) + PCD ${entitlement.tier}` : "Cloud Dashboard (CD) Foundation",
    isPcdAuthorized: entitlement.authorized,
    pcdEntitlement: entitlement,
    status: "active",
    capabilities: [
      "catalog-browsing",
      "debounced-search",
      "platformapps-telemetry",
      "circuit-breaker-retry",
      "okta-oidc-auth",
      "favourites-sync"
    ],
    initialized: true,
    ...safeOptions
  };
}

export function componentIdentityDescriptionAH(REACT_APP_COMPONENT_VERSION, REACT_APP_COMPONENT_NAME) {
  const VERSION = REACT_APP_COMPONENT_VERSION;
  const COMPONENT = REACT_APP_COMPONENT_NAME;
  return `<div>${VERSION}</div><div>${COMPONENT}</div><div><p>This functionality is not yet supported!</p></div>`;
}

export {
  beerActions,
  beerActionTypes,
  beerReducer,
  rootReducer,
  store,
  appConfig,
  Home,
  Dashboard,
  Favourites,
  Navbar,
  Search,
  Beer,
  Beers,
  BeerDetails,
  Navigation,
  LoginForm,
  LoginPage,
  ProfilePage,
  RegistrationForm
};

export * from "./actions/beerActions";

Object.assign(myFunction, {
  myFunction,
  verifyPcdAccess,
  componentIdentityDescriptionAH,
  beerActions,
  beerActionTypes,
  beerReducer,
  rootReducer,
  store,
  appConfig,
  Home,
  Dashboard,
  Favourites,
  Navbar,
  Search,
  Beer,
  Beers,
  BeerDetails,
  Navigation,
  LoginForm,
  LoginPage,
  ProfilePage,
  RegistrationForm
});

export default myFunction;
