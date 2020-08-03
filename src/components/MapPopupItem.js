import React from 'react';
import EventBundled from './EventBundled';

import styles from './MapPopupItem.css';

export default ({ sourceParam, popup, handleClosePopup }) => (
    <div className={styles.PopupItem}>
        <button
            type="button"
            className={styles.PopupClose}
            onClick={handleClosePopup}
        >
            x
        </button>
        <EventBundled data={popup} sourceParam={sourceParam} />
    </div>
);
