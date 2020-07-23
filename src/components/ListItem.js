import React from 'react';
import EventBundled from './EventBundled';
import EventSingle from  './EventSingle';

import styles from './ListItem.css';

export default ({ data, sourceParam } ) => (
    <li className={styles.EventListItem}>
        <EventSingle data={data} sourceParam={sourceParam} />
    </li>
);
