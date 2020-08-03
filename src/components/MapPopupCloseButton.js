import React from 'react';

import styles from './MapPopupCloseButton.css';

export default ({ handleClosePopup }) => (
    <button
        type="button"
        className={styles.PopupCloseButton}
        onClick={handleClosePopup}
    >
        <b className={`${styles.ButtonLeg} ${styles.ButtonLegLeft}`} />
        <b className={`${styles.ButtonLeg} ${styles.ButtonLegRight}`} />
    </button>
);
