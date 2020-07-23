import * as eventsAction from './actions/events';
import App from './app';
import { asyncHome, NotFound } from './pages';

export default [
    {
        component: App,
        routes: [
            {
                path: '/',
                exact: true,
                component: asyncHome, // Add your route here
                loadData: () => [
                    // Add other pre-fetched actions here
                    eventsAction.fetchEventsIfNeeded(),
                ],
            },
            {
                component: NotFound,
            },
        ],
    },
];
