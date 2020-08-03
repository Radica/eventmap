/*
 * Due to this known issue: https://github.com/smooth-code/loadable-components/issues/173
 * Use .js extension for code-splitting file
 */

// This is a code-splitting file because
// a map cannot be generated with server-side rendering (SSR),
// and so its execution must be deferred until browser page load.

import React from 'react';
import loadable from '@loadable/component';

import Loading from '../components/Loading';
import ErrorBoundary from '../components/ErrorBoundary';

const MapContainer = loadable(() => import('./MapContainer'), {
    ssr: false,
    fallback: <Loading />,
});

export default (props) => (
    <ErrorBoundary>
        <MapContainer {...props} />
    </ErrorBoundary>
);
