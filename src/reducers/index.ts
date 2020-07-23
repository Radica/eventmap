import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import type { History } from 'history';

import home from './home';
import search from './search';

export default (history: History) =>
    combineReducers({
        // Register reducers here
        home,
        search,
        router: connectRouter(history),
    });
