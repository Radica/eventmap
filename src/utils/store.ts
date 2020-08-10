import configureStore from './configureStore';

// Get the initial state from server-side rendering
const global = (globalThis as { __INITIAL_STATE__?: object }) || {};
const initialState = global.__INITIAL_STATE__ || {};
const { store, history } = configureStore({ initialState });
export { store, history };
