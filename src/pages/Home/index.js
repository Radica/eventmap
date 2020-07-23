/*
 * Due to this known issue: https://github.com/smooth-code/loadable-components/issues/173
 * Use .js extension for code-splitting file
 */

import React from 'react';
import loadable from '@loadable/component';

import { Loading, ErrorBoundary } from '../../components';

// @ts-ignore
import AsyncEventMap from '../../containers/AsyncMegamap';
// import AsyncEventMap from '../../components/EventMap';

const Home = loadable(() => import('./Home'), {
    fallback: <Loading />,
});

export default (props) => (
    <ErrorBoundary>
        <Home {...props} AsyncEventMapComponent={AsyncEventMap} />
    </ErrorBoundary>
);
