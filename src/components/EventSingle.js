import React from 'react';

import styles from './EventSingle.css';
import bundledStyles from './EventBundled.css';

export default ({
    bundled = false,
    sourceParam,
    data: { id, title, url, content, contentType },
}) => {
    const href = `${url}${sourceParam ? `?source=${sourceParam}` : ''}`;

    let containerClassName = styles.EventListItemContainer;
    if (bundled) {
        containerClassName = `${containerClassName} ${bundledStyles.EventBundledItem}`;
    }

    let contentTypeClassName = `${styles.EventListItemDesc} ${styles.EventListItemEventType}`;
    if (contentType === 'story') {
        contentTypeClassName = `${contentTypeClassName} ${styles.EventListItemEventTypeStory}`;
    } else if (contentType === 'action') {
        contentTypeClassName = `${contentTypeClassName} ${styles.EventListItemEventTypeAction}`;
    }

    let contentClassName = `${styles.EventListItemDesc} ${styles.EventListItemContent}`;
    if (!bundled) {
        contentClassName = `${contentClassName} ${styles.EventListItemSingleContent}`;
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
                <div
                    className={contentClassName}
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </div>
    );
};
