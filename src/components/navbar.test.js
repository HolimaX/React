import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './navbar';

let mockIsAuthenticated = false;
const mockSignOut = jest.fn();

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => ({
    authState: { isAuthenticated: mockIsAuthenticated },
    oktaAuth: { signOut: mockSignOut }
  })
}));

jest.mock('react-ga4', () => ({
  send: jest.fn()
}));

describe('Navbar Component', () => {
  beforeEach(() => {
    mockIsAuthenticated = false;
    jest.clearAllMocks();
  });

  it('renders brand and navigation links when unauthenticated', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByText('Beer Bank')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Favourite')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.queryByText('Logout')).not.toBeInTheDocument();
    expect(screen.queryByText('Profile')).not.toBeInTheDocument();
  });

  it('renders profile and logout when authenticated', () => {
    mockIsAuthenticated = true;
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByText('Beer Bank')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
    expect(screen.queryByText('Login')).not.toBeInTheDocument();
  });
});
