import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import type { History } from 'history';

import home from './home';

export default (history: History) =>
    combineReducers({
        // Register reducers here
        home,
        router: connectRouter(history),
    });
