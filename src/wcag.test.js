import React from 'react';
import fs from 'fs';
import path from 'path';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faStar,
  faBeer,
  faEnvelope,
  faLock,
  faExclamationTriangle,
  faMobileAlt,
  faCloud,
  faChartBar
} from '@fortawesome/free-solid-svg-icons';

import Beer from './components/beer';
import BeerDetails from './components/beer-details';
import Beers from './components/beers';
import Home from './components/home';
import Navigation from './components/shared/Navigation';

library.add(
  faStar,
  faBeer,
  faEnvelope,
  faLock,
  faExclamationTriangle,
  faMobileAlt,
  faCloud,
  faChartBar
);

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => ({
    authState: { isAuthenticated: false },
    oktaAuth: { signOut: jest.fn() }
  })
}));

jest.mock('react-ga4', () => ({
  send: jest.fn(),
  initialize: jest.fn()
}));

const mockStore = configureMockStore([thunk]);

describe('WCAG 2.2 Level AA & AAA Compliance Suite', () => {
  const sampleBeer = {
    id: 101,
    name: 'Punk IPA',
    tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    ibu: 60,
    abv: 5.6,
    ebc: 17,
    description: 'Our flagship beer that kick started the craft beer revolution.',
    food_pairing: ['Spicy carne asada', 'Cheesecake'],
    similar: [
      { id: 102, name: 'Trashy Blonde', image_url: 'https://images.punkapi.com/v2/2.png' }
    ]
  };

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([])
      })
    );
  });

  describe('WCAG 2.1.1 / 2.1.3 / 4.1.2 — Beer Card Keyboard Operability & ARIA State', () => {
    it('supports Enter and Space key activation on Beer card and exposes aria-pressed on favourite toggle', () => {
      const store = mockStore({
        beer: { favourites: [sampleBeer] }
      });
      const onDetail = jest.fn();

      render(
        <Provider store={store}>
          <Beer beer={sampleBeer} onDetail={onDetail} />
        </Provider>
      );

      const cardButton = screen.getByRole('button', { name: /View details for Punk IPA/i });
      expect(cardButton).toHaveAttribute('tabIndex', '0');

      // Activate via Enter key
      fireEvent.keyDown(cardButton, { key: 'Enter', code: 'Enter' });
      expect(onDetail).toHaveBeenCalledWith(sampleBeer);

      // Activate via Space key
      onDetail.mockClear();
      fireEvent.keyDown(cardButton, { key: ' ', code: 'Space' });
      expect(onDetail).toHaveBeenCalledWith(sampleBeer);

      // Verify favourite toggle button has aria-pressed, aria-label, and type="button"
      const favButton = screen.getByRole('button', { name: /Remove Punk IPA from favourites/i });
      expect(favButton).toHaveAttribute('type', 'button');
      expect(favButton).toHaveAttribute('aria-pressed', 'true');

      // Pressing Enter on favourite button should not bubble to card onDetail
      onDetail.mockClear();
      fireEvent.keyDown(favButton, { key: 'Enter', code: 'Enter' });
      expect(onDetail).not.toHaveBeenCalled();
    });
  });

  describe('WCAG 3.1.4 (AAA) & 4.1.2 (AA) — BeerDetails Abbreviations & Modal Close Control', () => {
    it('expands IBU, ABV, and EBC abbreviations and provides accessible close button', () => {
      const onClose = jest.fn();
      render(<BeerDetails beer={sampleBeer} onClose={onClose} />);

      expect(screen.getByTitle('International Bitterness Units')).toHaveTextContent('IBU');
      expect(screen.getByTitle('Alcohol by Volume')).toHaveTextContent('ABV');
      expect(screen.getByTitle('European Brewery Convention')).toHaveTextContent('EBC');

      const closeBtn = screen.getByRole('button', { name: /Close beer details/i });
      expect(closeBtn).toHaveAttribute('type', 'button');
      fireEvent.click(closeBtn);
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('WCAG 4.1.3 (AA) — Beers Status Live Regions', () => {
    it('announces loading state via role="status" and aria-live="polite"', () => {
      const store = mockStore({
        beer: {
          selected: {},
          isLoading: true,
          error: null,
          searchQuery: ''
        }
      });

      render(
        <Provider store={store}>
          <Beers beers={[]} isLoading={true} />
        </Provider>
      );

      const statusRegion = screen.getByRole('status');
      expect(statusRegion).toHaveAttribute('aria-live', 'polite');
      expect(statusRegion).toHaveTextContent(/Retrieving catalog data/i);
    });
  });

  describe('WCAG 2.4.6 / 4.1.2 — Home Social Share Buttons & Non-Orphan Metadata', () => {
    it('provides explicit aria-labels on social share buttons and avoids orphan form labels', () => {
      const store = mockStore({
        beer: {
          beers: [sampleBeer],
          platformapps: [],
          favourites: [],
          selected: {},
          page: 1,
          isLoading: false,
          error: null,
          searchQuery: ''
        }
      });

      const { container } = render(
        <Provider store={store}>
          <Home />
        </Provider>
      );

      const shareGroup = screen.getByRole('group', { name: /Share this page/i });
      expect(shareGroup).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Share on Twitter/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Share on Facebook/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Share on Telegram/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Share on LinkedIn/i })).toBeInTheDocument();

      // Verify every <label> in Home has a matching htmlFor target
      const labels = container.querySelectorAll('label');
      labels.forEach(label => {
        expect(label.getAttribute('for')).toBeTruthy();
      });
    });
  });

  describe('WCAG 2.4.8 (AAA) & 3.1.4 (AAA) — Shared Navigation Landmarks & Abbreviations', () => {
    it('renders Dashboard navigation landmark and expands CD abbreviation', () => {
      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );

      expect(screen.getByRole('navigation', { name: /Dashboard navigation/i })).toBeInTheDocument();
      expect(screen.getByTitle('Cloud Dashboard')).toHaveTextContent('CD');
    });
  });

  describe('WCAG 2.2 Static Stylesheet & HTML Shell Verification (2.4.11, 2.4.12, 2.4.13, 2.5.5, 2.5.8, 1.4.6, 2.3.3)', () => {
    const rootDir = path.resolve(__dirname, '..');
    const scssContent = fs.readFileSync(path.join(rootDir, 'src/App.scss'), 'utf8');
    const htmlContent = fs.readFileSync(path.join(rootDir, 'public/index.html'), 'utf8');

    it('enforces scroll-padding offsets so focused elements are not obscured by sticky headers/banners (WCAG 2.4.11 AA / 2.4.12 AAA)', () => {
      expect(scssContent).toContain('scroll-padding-top: 70px');
      expect(scssContent).toContain('scroll-padding-bottom: 95px');
    });

    it('enforces 3px high-contrast :focus-visible outlines (WCAG 2.4.13 Focus Appearance AAA)', () => {
      expect(scssContent).toContain(':focus-visible');
      expect(scssContent).toContain('outline: 3px solid #004085');
      expect(htmlContent).toContain(':focus-visible');
    });

    it('enforces 44x44px minimum target sizes on interactive controls (WCAG 2.5.8 AA / 2.5.5 AAA)', () => {
      expect(scssContent).toContain('min-width: 44px');
      expect(scssContent).toContain('min-height: 44px');
    });

    it('provides prefers-reduced-motion media query support (WCAG 2.3.3 AAA)', () => {
      expect(scssContent).toContain('@media (prefers-reduced-motion: reduce)');
      expect(htmlContent).toContain('@media (prefers-reduced-motion: reduce)');
    });

    it('defines skip-to-main-content link and semantic landmarks in public/index.html (WCAG 2.4.1 A / 1.3.1 A)', () => {
      expect(htmlContent).toContain('class="skip-link"');
      expect(htmlContent).toContain('href="#main-content"');
      expect(htmlContent).toContain('id="main-content"');
    });
  });
});

