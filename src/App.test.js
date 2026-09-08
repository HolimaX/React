import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import App from './App';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faBeer,
  faEnvelope,
  faLock,
  faExclamationTriangle,
  faMobileAlt,
  faCloud,
  faChartBar,
  faUserShield,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faStar,
  faBeer,
  faEnvelope,
  faLock,
  faExclamationTriangle,
  faMobileAlt,
  faCloud,
  faChartBar,
  faUserShield,
  faGlobe
);

// Mock subcomponents to ensure fast, isolated route testing
jest.mock('./components/navbar', () => () => <nav role="navigation">Navbar</nav>);
jest.mock('./components/favourites', () => () => <div>Favourites Page</div>);
jest.mock('./components/beers', () => () => <div>Beers List</div>);
jest.mock('./components/home', () => () => <div>Home Page Beer Bank</div>);
jest.mock('react-adsense', () => ({ Google: () => <div data-testid="adsense" /> }));
jest.mock('react-ga4', () => ({
  send: jest.fn(),
  initialize: jest.fn()
}));

// Mock Okta Auth
let mockIsAuthenticated = false;
jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => ({
    authState: { isAuthenticated: mockIsAuthenticated },
    oktaAuth: {
      signInWithRedirect: jest.fn(),
      signOut: jest.fn(),
      getUser: () => Promise.resolve({ email: 'test@example.com', name: 'Tester', tier: 'STANDARD' }),
      getAccessToken: () => 'fake-token'
    }
  }),
  LoginCallback: () => <div>Callback</div>
}));

// Mock global fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]),
  })
);

describe('Cloud Dashboard (CD) Foundation Ecosystem Validation', () => {
  const renderApp = (path = '/') => {
    mockIsAuthenticated = path === '/profile';
    window.history.pushState({}, 'Test page', path);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  };

  beforeEach(() => {
    mockIsAuthenticated = false;
    jest.clearAllMocks();
  });

  test('renders landing page with Beer Bank home component', () => {
    renderApp('/');
    expect(screen.getByText(/Home Page Beer Bank/i)).toBeInTheDocument();
  });

  test('renders Favourites route', () => {
    renderApp('/favourite');
    expect(screen.getByText(/Favourites Page/i)).toBeInTheDocument();
  });

  test('validates User Dashboard ecosystem components', () => {
    renderApp('/user');
    
    // Check for Tier Branding
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/The Cloud Dashboard \(CD\)/i);
    
    // Check for Ecosystem Notice
    expect(screen.getByText(/Ecosystem Notice/i)).toBeInTheDocument();
    
    // Check for Product Pillars
    expect(screen.getByText(/Mobile Application/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Cloud Dashboard.*PCD/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Visualizer.*DSV/i })).toBeInTheDocument();
  });

  test('renders Login page when navigating to /login', () => {
    renderApp('/login');

    expect(screen.getByLabelText(/Username:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^login$/i })).toBeInTheDocument();
  });

  test('renders Register page when navigating to /register', () => {
    renderApp('/register');

    expect(screen.getByPlaceholderText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
  });

  test('renders Profile page with telemetry cards when authenticated', async () => {
    renderApp('/profile');

    expect(await screen.findByText(/User Profile/i)).toBeInTheDocument();
    expect(screen.getByText(/test@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Your Cloud Dashboard Cards/i)).toBeInTheDocument();
  });

  test('renders Cookie Consent banner on non-home pages', () => {
    renderApp('/user');

    expect(screen.getByText(/This website uses cookies and data to enhance the user experience/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /accept cookies/i })).toBeInTheDocument();
  });
});

