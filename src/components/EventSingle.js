import React from 'react';

import ListItemContent from './ListItemContent.js';

import styles from './EventSingle.css';
import bundledStyles from './EventBundled.css';

export default ({
    bundled = false,
    sourceParam,
    data: { title, url, content, contentType },
}) => {
    const href = `${url}${sourceParam ? `?source=${sourceParam}` : ''}`;

    let containerClassName = styles.EventListItemContainer;
    if (bundled) {
        containerClassName = `${containerClassName} ${bundledStyles.EventBundledItem}`;
    }

    let contentTypeClassName = `${styles.EventListItemEventType}`;
    if (contentType === 'story') {
        contentTypeClassName = `${contentTypeClassName} ${styles.EventListItemEventTypeStory}`;
    } else if (contentType === 'action') {
        contentTypeClassName = `${contentTypeClassName} ${styles.EventListItemEventTypeAction}`;
    }

    return (
        <div className={containerClassName}>
            <div className={styles.EventListItemInfo}>
                <div className={contentTypeClassName}>{contentType}</div>
                <h2 className={styles.EventListItemTitle}>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <ListItemContent bundled={bundled} content={content} />
            </div>
        </div>
    );
};
