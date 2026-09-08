import path from 'path';
import { execSync } from 'child_process';

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => ({
    authState: { isAuthenticated: false },
    oktaAuth: {
      signOut: jest.fn(),
      signInWithRedirect: jest.fn()
    }
  }),
  LoginCallback: () => <div>LoginCallback</div>,
  withAuth: (Component) => Component
}));

jest.mock('react-ga4', () => ({
  send: jest.fn(),
  initialize: jest.fn()
}));

import {
  myFunction,
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
  RegistrationForm,
  fetchBeers,
  fetchPlatformApps,
  verifyPcdAccess
} from './index.lib';

const rootDir = path.resolve(__dirname, '..');

describe('Library Module Integration & Exports', () => {
  describe('myFunction Lifecycle Initialization & PCD Tier Safeguards', () => {
    it('should initialize and return complete ecosystem metadata with default CD Foundation tier', () => {
      const infoSpy = jest.spyOn(console, 'info').mockImplementation(() => {});
      const result = myFunction();

      expect(infoSpy).toHaveBeenCalledWith(
        expect.stringContaining('[CD Foundation] Initialized CD base module (@HolimaX/beerbank)')
      );
      expect(result).toBeDefined();
      expect(result.name).toBe('@HolimaX/beerbank');
      expect(result.version).toBe('0.1.26');
      expect(result.tier).toBe('Cloud Dashboard (CD) Foundation');
      expect(result.isPcdAuthorized).toBe(false);
      expect(result.status).toBe('active');
      expect(result.initialized).toBe(true);
      expect(Array.isArray(result.capabilities)).toBe(true);
      expect(result.capabilities).toContain('catalog-browsing');
      expect(result.capabilities).toContain('debounced-search');
      expect(result.capabilities).toContain('platformapps-telemetry');

      infoSpy.mockRestore();
    });

    it('should block illicit attempts to force Pro/Premium PCD tier via options without Okta auth', () => {
      const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      const result = myFunction({ tier: 'PRO', isPcdAuthorized: true });

      expect(warnSpy).toHaveBeenCalledWith(
        expect.stringContaining('[CD Foundation Security Alert] Unauthorized attempt to activate PCD premium tier detected.')
      );
      expect(result.tier).toBe('Cloud Dashboard (CD) Foundation');
      expect(result.isPcdAuthorized).toBe(false);
      expect(result.pcdEntitlement.authorized).toBe(false);

      warnSpy.mockRestore();
    });

    it('should allow PCD authorization only when caller provides verified Pro/Premium Okta user', () => {
      const authState = { isAuthenticated: true };
      const proUser = { email: 'pro@healthdash.lv', tier: 'PRO' };
      const result = myFunction({ authState, user: proUser });

      expect(result.isPcdAuthorized).toBe(true);
      expect(result.tier).toBe('Cloud Dashboard (CD) + PCD PRO');
      expect(result.pcdEntitlement.authorized).toBe(true);
      expect(result.pcdEntitlement.tier).toBe('PRO');
    });

    it('should deny PCD authorization if authenticated user has STANDARD tier', () => {
      const authState = { isAuthenticated: true };
      const standardUser = { email: 'std@example.com', tier: 'STANDARD' };
      const result = myFunction({ authState, user: standardUser });

      expect(result.isPcdAuthorized).toBe(false);
      expect(result.tier).toBe('Cloud Dashboard (CD) Foundation');
      expect(result.pcdEntitlement.authorized).toBe(false);
    });

    it('should support passing safe custom options while preserving core security fields', () => {
      const result = myFunction({ customFeature: 'custom-val', debug: true });
      expect(result.customFeature).toBe('custom-val');
      expect(result.debug).toBe(true);
      expect(result.name).toBe('@HolimaX/beerbank');
      expect(result.version).toBe('0.1.26');
    });
  });

  describe('verifyPcdAccess Safeguard Unit Tests', () => {
    it('should reject unauthenticated requests', () => {
      expect(verifyPcdAccess(null, null).authorized).toBe(false);
      expect(verifyPcdAccess({ tier: 'PRO' }, { isAuthenticated: false }).authorized).toBe(false);
      expect(verifyPcdAccess(null, { isAuthenticated: true }).authorized).toBe(false);
    });

    it('should reject non-Pro/Premium tiers', () => {
      const auth = { isAuthenticated: true };
      expect(verifyPcdAccess({ tier: 'STANDARD' }, auth).authorized).toBe(false);
      expect(verifyPcdAccess({ tier: 'BASIC' }, auth).authorized).toBe(false);
      expect(verifyPcdAccess({}, auth).authorized).toBe(false);
    });

    it('should authorize PRO and PREMIUM Okta tiers', () => {
      const auth = { isAuthenticated: true };
      expect(verifyPcdAccess({ tier: 'PRO' }, auth).authorized).toBe(true);
      expect(verifyPcdAccess({ tier: 'pro' }, auth).authorized).toBe(true);
      expect(verifyPcdAccess({ tier: 'PREMIUM' }, auth).authorized).toBe(true);
      expect(verifyPcdAccess({ tier: 'premium' }, auth).authorized).toBe(true);
    });
  });

  describe('componentIdentityDescriptionAH Helper', () => {
    it('should render standard identity HTML description', () => {
      const output = componentIdentityDescriptionAH('v1.0.0', 'BeerCatalog');
      expect(output).toBe('<div>v1.0.0</div><div>BeerCatalog</div><div><p>This functionality is not yet supported!</p></div>');
    });
  });

  describe('Core Redux Actions and Reducers Exports', () => {
    it('should export all key action creators as functions', () => {
      expect(typeof fetchBeers).toBe('function');
      expect(typeof fetchPlatformApps).toBe('function');
      expect(typeof beerActions.searchBeers).toBe('function');
      expect(typeof beerActions.handleFavourite).toBe('function');
      expect(typeof beerActions.handleFavouritePlatformapps).toBe('function');
      expect(typeof beerActions.displayBeer).toBe('function');
      expect(typeof beerActions.fetchMoreBeers).toBe('function');
      expect(typeof beerActions.fetchMorePlatformApps).toBe('function');
      expect(typeof beerActions.searchPlatformapps).toBe('function');
      expect(typeof beerActions.displayPlatformapp).toBe('function');
    });

    it('should export all action types', () => {
      expect(beerActionTypes).toBeDefined();
      expect(beerActionTypes.FETCH_BEERS).toBe('FETCH_BEERS');
      expect(beerActionTypes.FETCH_PLATFORMAPPS).toBe('FETCH_PLATFORMAPPS');
      expect(beerActionTypes.SEARCH_BEERS).toBe('SEARCH_BEERS');
    });

    it('should export valid reducers and store', () => {
      expect(typeof beerReducer).toBe('function');
      expect(typeof rootReducer).toBe('function');
      expect(store).toBeDefined();
      expect(typeof store.dispatch).toBe('function');
      expect(typeof store.getState).toBe('function');
    });
  });

  describe('Exported React Components', () => {
    it('should export all core view and auth components', () => {
      expect(Home).toBeDefined();
      expect(Dashboard).toBeDefined();
      expect(Favourites).toBeDefined();
      expect(Navbar).toBeDefined();
      expect(Search).toBeDefined();
      expect(Beer).toBeDefined();
      expect(Beers).toBeDefined();
      expect(BeerDetails).toBeDefined();
      expect(Navigation).toBeDefined();
      expect(LoginForm).toBeDefined();
      expect(LoginPage).toBeDefined();
      expect(ProfilePage).toBeDefined();
      expect(RegistrationForm).toBeDefined();
    });

    it('should export configuration object', () => {
      expect(appConfig).toBeDefined();
      expect(appConfig.url).toBeDefined();
    });
  });

  describe('CLI and REPL Interoperability', () => {
    it('should execute node beerbank cleanly and print module inventory', () => {
      const output = execSync('node beerbank.js', {
        cwd: rootDir,
        encoding: 'utf8'
      });

      expect(output).toContain('@HolimaX/beerbank - Cloud Dashboard (CD) Foundation');
      expect(output).toContain('Version: 0.1.26');
      expect(output).toContain('myFunction()');
      expect(output).toContain('Exported Base Functions & Services:');
    });

    it('should allow CommonJS require resolution via root index.js', () => {
      const cjsModule = require('../index.js');
      expect(cjsModule).toBeDefined();
      expect(typeof cjsModule.myFunction).toBe('function');
      const meta = cjsModule.myFunction();
      expect(meta.name).toBe('@HolimaX/beerbank');
      expect(meta.initialized).toBe(true);
    });
  });
});
