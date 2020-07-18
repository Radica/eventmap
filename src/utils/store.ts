import configureStore from './configureStore';

// Get the initial state from server-side rendering
const initialState = window.__INITIAL_STATE__;
const { store, history } = configureStore({ initialState });
export { store, history };
