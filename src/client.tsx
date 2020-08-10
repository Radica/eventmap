import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { renderRoutes } from 'react-router-config';
import { loadableReady } from '@loadable/component';

import { store, history } from './utils/store';
import routes from './routes';

const render = (Routes: Array<object>) => {
    const renderMethod = (module as any).hot
        ? ReactDOM.render
        : ReactDOM.hydrate;

    renderMethod(
        <AppContainer>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    {renderRoutes(Routes)}
                </ConnectedRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('events-map-react-root')
    );
};

// loadable-component setup
loadableReady(() => {
    render(routes);
});

if ((module as any).hot) {
    // Enable webpack hot module replacement for routes
    (module as any).hot.accept('./routes', () => {
        try {
            const nextRoutes = require('./routes').default;

            render(nextRoutes);
        } catch (error) {
            console.error(`==> 😭  Routes hot reloading error ${error}`);
        }
    });
}
