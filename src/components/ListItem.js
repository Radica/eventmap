import React from 'react';
import EventSingle from './EventSingle';

import styles from './ListItem.css';

export default ({ event, sourceParam }) => (
    <li className={styles.EventListItem}>
        <EventSingle event={event} sourceParam={sourceParam} />
    </li>
);
