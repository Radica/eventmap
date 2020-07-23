import React from 'react';
// import Icon from 'react-fontawesome';
import EventBundled from './EventBundled';

import styles from './MapPopupItem.css';

// <Icon name='close' style={{color: 'black'}} />

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
