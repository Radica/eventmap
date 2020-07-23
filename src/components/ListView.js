import React from 'react';
import ListItem from './ListItem';

import styles from './ListView.css';

export default ({
    activeFilters,
    eventsData,
    eventTypes,
    sourceParam,
}) => {
    return (
    <div className={styles.EventListContainer}>
        <ul className={styles.EventList}>
            {!!activeFilters && eventsData.map((item) =>
                <ListItem data={item} sourceParam={sourceParam} key={`${item.longitude}-${item.latitude}-${item.url}`}/>
            )}
        </ul>
    </div>
)}
