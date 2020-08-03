import React from 'react';

import EventSingle from './EventSingle.js';

import styles from './EventBundled.css';

export default ({ sourceParam, data }) => {
    return (
        <div className="event-bundled-cont">
            <div className={styles.EventBundledItems}>
                {data.map((item) => (
                    <EventSingle
                        key={item.id}
                        data={item}
                        sourceParam={sourceParam}
                        bundled
                    />
                ))}
            </div>
        </div>
    );
};
