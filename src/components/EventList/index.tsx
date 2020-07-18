import React, { memo } from 'react';

import styles from './styles.scss';

import type { Event } from '../../types';

interface Props {
    list: Array<Event>;
}

export default memo(({ list }: Props) => (
    <div className={styles.EventList}>
        <h4>Events</h4>
        <ul>
            {list.map(({ id, title, content }) => (
                <li key={id}>
                    <div>{title}</div>
                    <div>{content}</div>
                </li>
            ))}
        </ul>
    </div>
));
