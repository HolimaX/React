#!/usr/bin/env node

const beerbank = require('./dist/cjs/index.js');

if (require.main === module) {
  const metadata = typeof beerbank.myFunction === 'function' ? beerbank.myFunction() : {};
  console.log("=====================================================");
  console.log("@HolimaX/beerbank - Cloud Dashboard (CD) Foundation");
  console.log(`Version: ${metadata.version || "0.1.26"}`);
  console.log(`Tier: ${metadata.tier || "Cloud Dashboard (CD) Foundation"}`);
  console.log("=====================================================");
  console.log("Exported Base Functions & Services:");
  console.log(" - myFunction(): Base lifecycle initializer with tier entitlement safeguards");
  console.log(" - verifyPcdAccess(user, authState): Strict Okta Pro/Premium entitlement validator");
  console.log(" - componentIdentityDescriptionAH(version, name): Component descriptor helper");
  console.log(" - beerActions: fetchBeers, searchBeers, setFavourite, fetchPlatformApps, searchPlatformApps");
  console.log(" - beerReducer, rootReducer, store");
  console.log(" - Components: Home, Dashboard, Favourites, Navbar, Search, Beer, Beers, Details");
  console.log(" - Config: appConfig");
  console.log("=====================================================");
  console.log("Status: Active and ready for REPL, Node, and client integration.");
}

module.exports = beerbank;
