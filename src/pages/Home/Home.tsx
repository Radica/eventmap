import React, { useEffect, memo } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import type { ReactElement, ReactNode } from 'react';
import type { Map as MapType } from 'mapbox-gl';

import useThunkDispatch from '../../utils/useThunkDispatch';
import eventsAction from '../../actions';
import { EventList } from '../../components';
import { AppState } from '../../types';
import styles from './styles.scss';

type Props = {
    AsyncEventMapComponent?: ReactElement;
};

// Export for unit testing
export const Home = ({ AsyncEventMapComponent }: Props) => {
    const { readyStatus, events } = useSelector(
        (state: AppState) => state.home
    );
    const dispatch = useThunkDispatch();

    useEffect(() => {
        dispatch(eventsAction.fetchEventsIfNeeded());
    }, [dispatch]);

    const renderEventList = () => {
        if (
            readyStatus == null ||
            readyStatus === 'invalid' ||
            readyStatus === 'request'
        )
            return <p>Loading...</p>;

        // TODO: Write a better error message.
        if (readyStatus === 'failure') return <p>Failed to load events.</p>;

        return <EventList list={events} />;
    };

    function onMapCreate(map: MapType): (p0: MapType) => ReactNode {
        console.log(map);
        return null;
    }

    return (
        <div className={styles.Home}>
            <Helmet title="Home" />
            {renderEventList()}
            {AsyncEventMapComponent && (
                // @ts-ignore
                <AsyncEventMapComponent
                    source={null /* used to be geom */}
                    onMapCreate={onMapCreate}
                />
            )}
        </div>
    );
};

export default memo(Home);
