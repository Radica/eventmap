import React, { useState, useLayoutEffect } from 'react';

import ListItem from './ListItem';
import searchAction from '../actions/search';
import useThunkDispatch from '../utils/useThunkDispatch';

import styles from './ListView.css';

export default ({ activeFilters, eventsData, sourceParam }) => {
    const [buttonTapped, setButtonTapped] = useState(false);
    const dispatch = useThunkDispatch();

    useLayoutEffect(() => {
        if (buttonTapped) {
            dispatch(searchAction.resetMap());
            setButtonTapped(false);
        }
    }, [dispatch, buttonTapped]);

    return (
        <div className={styles.EventListContainer}>
            <ul className={styles.EventList}>
                {!!activeFilters &&
                    eventsData.map((event) => (
                        <ListItem
                            event={event}
                            sourceParam={sourceParam}
                            key={`${event.longitude}-${event.latitude}-${event.url}`}
                        />
                    ))}
                {eventsData.length === 0 && (
                    <div className={styles.EventListNull}>
                        <p className={styles.EventListNullText}>
                            Nothing found in this area. Try a different search,
                            or zoom out to find the closest action or story.
                        </p>
                        <button
                            type="button"
                            className={styles.EventListNullButton}
                            onClick={() => setButtonTapped(true)}
                        >
                            Zoom Out
                        </button>
                    </div>
                )}
            </ul>
        </div>
    );
};
