import * as eventsAction from './actions/events';
import App from './app';
import { NotFound } from './pages';
import Home from './pages/Home/Home';

export default [
    {
        component: App,
        routes: [
            {
                path: '/action-map/',
                exact: true,
                component: Home, // Add your route here
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
