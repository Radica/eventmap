import React from 'react';

import styles from './ListItemContent.css';

export default ({ bundled, content }) => {
    return (
        <div
            className={`${styles.EventListItemContent} ${
                bundled ? '' : styles.EventListItemSingleContent
            }`}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
};
