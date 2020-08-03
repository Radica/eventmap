import React from 'react';

import EventSingle from './EventSingle.js';

import styles from './EventBundled.css';

export default ({ sourceParam, bundledEvents }) => {
    return (
        <div className="event-bundled-cont">
            <div className={styles.EventBundledItems}>
                {bundledEvents.map((event) => (
                    <EventSingle
                        key={event.id}
                        event={event}
                        sourceParam={sourceParam}
                        bundled
                    />
                ))}
            </div>
        </div>
    );
};
