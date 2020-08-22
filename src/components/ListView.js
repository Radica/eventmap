import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import ListItem from './ListItem';
// import searchAction from '../actions/search';
// import useThunkDispatch from '../utils/useThunkDispatch';

import styles from './ListView.css';

const ListView = ({ activeFilters, eventsData, sourceParam, map }) => {
    const [buttonTapped, setButtonTapped] = useState(false);
    // const dispatch = useThunkDispatch();

    useEffect(() => {
        if (map && buttonTapped) {
            map.fitBounds([
                [-65.27952974884487, 54.281353451957585],
                [-127.3735738860654, 19.084515887021055],
            ]);
            setButtonTapped(false);
        }
    }, [map, buttonTapped]);

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
                            or zoom out to find the closest action or
                            organization.
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

const mapStateToProps = ({ search }) => {
    return {
        map: search.map,
    };
};

export default connect(mapStateToProps)(ListView);
