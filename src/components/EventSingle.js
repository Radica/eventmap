import React from 'react';
import Moment from 'react-moment';
import ClockIcon from '../assets/images/clock.png';
import MarkerIcon from '../assets/images/marker.png';

import styles from './EventSingle.css';

export default ({
    bundled = false,
    sourceParam,
    data: {
        title,
        content,
        url,
        venue,
        event_type,
        information,
        description,
        location,
        datetime_start,
        address1,
        address2,
        city,
        state,
        name,
        website,
        group,
        group_url
    }
}) => (
    <div
        className={
            `${bundled && styles.eventBundledItem} ${styles.EventListItemContainer}`
        }
    >

        <div className={styles.EventListItemDate}>
            <div className={styles.EventListDateView}>
                <Moment className={styles.EventListDayData} format="ddd" >{ datetime_start }</Moment>
                <Moment className={styles.EventListDateData} format="DD" >{ datetime_start }</Moment>
                <Moment className={styles.EventListMonthData} format="MMM" >{ datetime_start }</Moment>
            </div>

        </div>
        <div className={styles.EventListItemInfo}>
            <h2 className={styles.EventListItemTitle}>
                <a href={`${url || website}${ sourceParam ? `?source=${sourceParam}` : ''}`} target='_blank'>{name || title}</a>
            </h2>
            <div className={`${styles.EventListItemDesc} ${styles.EventListItemEventType}`}>
                {event_type && event_type.event_type_mapping && event_type.event_type_mapping.display_name || "Event"}
            </div>
            <div className={styles.EventListItemDesc}>
                <div className={styles.EventInformation}>
                    {information}
                </div>
            </div>
            <div className={styles.EventListItemDesc}>
                <img src={ClockIcon} className={styles.EventListIcon} /> <Moment className={styles.EventListTimeData} format="h:mm a" >{ datetime_start }</Moment>
            </div>
            {!bundled && (
                <div className={styles.EventListItemDesc}>
                    <img
                        alt="event marker icon"
                        src={MarkerIcon}
                        className={styles.EventListIcon}
                    />
                    <div>
                        <span>{venue}</span>
                        {venue && address1 && <br />}
                        <span>
                            {[address1, address2, city, state]
                                .filter((x) => x)
                                .join(' ')}
                        </span>
                    </div>
                </div>
            )}
            {bundled && (
                <div
                    className={styles.EventListItemDesc}
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            )}
        </div>
    </div>
);
