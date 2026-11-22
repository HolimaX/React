import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
    window.history.pushState({}, 'Home', '/');
    jest.clearAllMocks();
  });

  it('renders brand, accessible navigation landmark, and aria-current link when unauthenticated', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const nav = screen.getByRole('navigation', { name: /main navigation/i });
    expect(nav).toBeInTheDocument();
    expect(screen.getByText('Beer Bank')).toBeInTheDocument();

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('aria-current', 'page');

    expect(screen.getByText('Favourite')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.queryByText('Logout')).not.toBeInTheDocument();
    expect(screen.queryByText('Profile')).not.toBeInTheDocument();
  });

  it('renders profile and logout button with explicit type="button" when authenticated', () => {
    mockIsAuthenticated = true;
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByText('Beer Bank')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();

    const logoutBtn = screen.getByText('Logout');
    expect(logoutBtn).toBeInTheDocument();
    expect(logoutBtn).toHaveAttribute('type', 'button');
    fireEvent.click(logoutBtn);
    expect(mockSignOut).toHaveBeenCalledTimes(1);

    expect(screen.queryByText('Login')).not.toBeInTheDocument();
  });
});

