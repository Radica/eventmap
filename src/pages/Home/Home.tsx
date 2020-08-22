import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { AppState } from '../../types';
import styles from './styles.scss';
// @ts-ignore
import Megamap from '../../containers/Megamap';

// Export for unit testing
const Home = () => {
    const { readyStatus } = useSelector((state: AppState) => state.home);
    const renderEventMap = () => {
        if (readyStatus === 'failure') {
            return <p>Failed to load action map.</p>;
        }

        return <Megamap />;
    };

    return (
        <div className={styles.Home}>
            <Helmet title="Home" />
            {renderEventMap()}
        </div>
    );
};

export default memo(Home);
