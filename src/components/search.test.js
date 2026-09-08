import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import Search from './search';

const mockStore = configureMockStore([thunk]);

describe('Search Component', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      })
    );
  });

  test('updates input and triggers debounced search', async () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Search for beer name');
    fireEvent.change(input, { target: { value: 'IPA' } });

    expect(input.value).toBe('IPA');

    // Wait for 500ms debounce + execution
    await waitFor(() => {
      const actions = store.getActions();
      expect(actions.some(a => a.type === 'FETCHING_BEERS')).toBe(true);
    }, { timeout: 1000 });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('beer_name=IPA'));
  });
});
