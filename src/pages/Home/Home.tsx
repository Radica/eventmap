import React, { useEffect, memo } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import type { ReactElement } from 'react';

import useThunkDispatch from '../../utils/useThunkDispatch';
import * as eventsAction from '../../actions/events';
import { AppState } from '../../types';
import styles from './styles.scss';
// @ts-ignore
import Megamap from '../../containers/Megamap';

// Export for unit testing
const Home = () => {
    const { readyStatus, eventTypes } = useSelector(
        (state: AppState) => state.home
    );
    const dispatch = useThunkDispatch();

    console.log('event types:', eventTypes);

    useEffect(() => {
        dispatch(eventsAction.fetchEventsIfNeeded());
    }, [dispatch]);

    const renderEventMap = () => {
        // if (
        //     readyStatus == null ||
        //     readyStatus === 'invalid' ||
        //     readyStatus === 'request'
        // )
        //     return <p>Loading...</p>;

        // // TODO: Write a better error message.
        if (readyStatus === 'failure') {
            return <p>Failed to load events.</p>;
        }

        return <Megamap />;
    };

    return (
        <div className={styles.Home}>
            <Helmet title="Home" />
            {renderEventMap()}
        </div>
    );
};

export default memo(Home);
