import React from 'react';
import ListItem from './ListItem';

import styles from './ListView.css';

export default ({ activeFilters, eventsData, sourceParam }) => {
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
            </ul>
        </div>
    );
};
