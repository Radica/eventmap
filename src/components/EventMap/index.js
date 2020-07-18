/*
 * Due to this known issue: https://github.com/smooth-code/loadable-components/issues/173
 * Use .js extension for code-splitting file
 */

// This is a code-splitting file because
// a map cannot be generated with server-side rendering (SSR),
// and so its execution must be deferred until browser page load.

import React from 'react';
import loadable from '@loadable/component';

import Loading from '../Loading';
import ErrorBoundary from '../ErrorBoundary';

const EventMap = loadable(() => import('./EventMap'), {
    ssr: false,
    fallback: <Loading />,
});

export default (props) => (
    <ErrorBoundary>
        <EventMap {...props} />
    </ErrorBoundary>
);
