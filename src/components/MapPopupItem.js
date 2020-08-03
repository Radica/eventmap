import React from 'react';

import EventBundled from './EventBundled';
import MapPopupCloseButton from './MapPopupCloseButton.js';

import styles from './MapPopupItem.css';

export default ({ sourceParam, bundledEvents, handleClosePopup }) => (
    <div className={styles.PopupItem}>
        <MapPopupCloseButton handleClosePopup={handleClosePopup} />
        <EventBundled bundledEvents={bundledEvents} sourceParam={sourceParam} />
    </div>
);
