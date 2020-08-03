import React from 'react';
import EventBundled from './EventBundled';

import styles from './MapPopupItem.css';

export default ({ sourceParam, bundledEvents, handleClosePopup }) => (
    <div className={styles.PopupItem}>
        <button
            type="button"
            className={styles.PopupClose}
            onClick={handleClosePopup}
        >
            x
        </button>
        <EventBundled bundledEvents={bundledEvents} sourceParam={sourceParam} />
    </div>
);
