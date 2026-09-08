import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import * as actions from './beerActions';
import { beerActionTypes as actionTypes } from './types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('beerActions', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('fetchBeers dispatches correct actions on success', async () => {
    const beers = [{ id: 1, name: 'Buzz' }];
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(beers),
      })
    );

    const expectedActions = [
      { type: actionTypes.FETCHING_BEERS, payload: { isLoading: true } },
      { type: actionTypes.FETCH_BEERS, payload: { beers, page: 1, isLoading: false, error: null } }
    ];

    const store = mockStore({ beer: { beers: [] } });
    await store.dispatch(actions.fetchBeers(1));

    expect(store.getActions()).toEqual(expectedActions);
  });

  test('fetchBeers dispatches failure state on HTTP error', async () => {
    jest.spyOn(global, 'setTimeout').mockImplementation(callback => {
      callback();
      return 0;
    });
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        status: 404,
      })
    );

    const store = mockStore({});
    await store.dispatch(actions.fetchBeers(1));
    global.setTimeout.mockRestore();

    const dispatchedActions = store.getActions();
    expect(dispatchedActions.find(a => a.type === actionTypes.FETCH_BEERS).payload.beers).toEqual([]);
  });

  test('fetchPlatformApps dispatches correct actions on success', async () => {
    const platformapps = [{ id: 101, name: 'App One', voteid: 'app-1' }];
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(platformapps),
      })
    );

    const expectedActions = [
      { type: actionTypes.FETCHING_PLATFORMAPPS, payload: { isLoading: true } },
      { type: actionTypes.FETCH_PLATFORMAPPS, payload: { platformapps, page: 1, isLoading: false, error: null } }
    ];

    const store = mockStore({ beer: { platformapps: [] } });
    await store.dispatch(actions.fetchPlatformApps(1));

    expect(store.getActions()).toEqual(expectedActions);
  });

  test('fetchPlatformApps dispatches failure state on HTTP error', async () => {
    jest.spyOn(global, 'setTimeout').mockImplementation(callback => {
      callback();
      return 0;
    });
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        status: 500,
      })
    );

    const store = mockStore({ beer: { platformapps: [] } });
    await store.dispatch(actions.fetchPlatformApps(1));
    global.setTimeout.mockRestore();

    const dispatchedActions = store.getActions();
    const fetchAction = dispatchedActions.find(a => a.type === actionTypes.FETCH_PLATFORMAPPS);
    expect(fetchAction).toBeDefined();
    expect(fetchAction.payload.platformapps).toEqual([]);
    expect(fetchAction.payload.error).toMatch(/failed to load/i);
  });

  test('searchPlatformapps dispatches search action with query', async () => {
    const results = [{ id: 102, name: 'HealthSync' }];
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(results),
      })
    );

    const store = mockStore({ beer: { platformapps: [] } });
    await store.dispatch(actions.searchPlatformapps('Health'));

    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('/api/people/Health'));
    const dispatchedActions = store.getActions();
    const searchAction = dispatchedActions.find(a => a.type === actionTypes.SEARCH_PLATFORMAPPS);
    expect(searchAction).toBeDefined();
    expect(searchAction.payload.platformapps).toEqual(results);
  });

  test('displayPlatformapp fetches similar apps and dispatches DISPLAY_PLATFORMAPP', async () => {
    const selectedApp = { id: 201, voteid: 'app-201', name: 'Dashboard Widget' };
    const similarApps = [{ id: 202, name: 'Companion App' }];
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(similarApps),
      })
    );

    const store = mockStore({ beer: {} });
    await store.dispatch(actions.displayPlatformapp(selectedApp));

    const dispatchedActions = store.getActions();
    const displayAction = dispatchedActions.find(a => a.type === actionTypes.DISPLAY_PLATFORMAPP);
    expect(displayAction).toBeDefined();
    expect(displayAction.payload.selected.similar).toEqual(similarApps);
  });

  test('handleFavouritePlatformapps dispatches HANDLE_FAVOURITE_PLATFORMAPP', () => {
    const app = { id: 301, name: 'Starred App' };
    const store = mockStore({});
    store.dispatch(actions.handleFavouritePlatformapps(app));

    expect(store.getActions()).toEqual([
      {
        type: actionTypes.HANDLE_FAVOURITE_PLATFORMAPP,
        payload: { platformapp: app }
      }
    ]);
  });
});
