import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';
import { hot } from 'react-hot-loader';

import config from '../config';

// Import your global styles here
import 'normalize.css/normalize.css';
import styles from './styles.scss';
import '../_fonts.css';
import '../_variable.css';

interface Route {
    route: { routes: Array<object> };
}

const App = ({ route }: Route) => (
    <div className={styles.App}>
        <Helmet {...config.app} />
        {/* Child routes won't render without this */}
        {renderRoutes(route.routes)}
    </div>
);

export default hot(module)(App);
