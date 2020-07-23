import React from 'react';
import EventSingle from './EventSingle.js';
import MarkerIcon from '../assets/images/marker.png';

import styles from './EventBundled.css';

export default ({ sourceParam, data }) => {

    const venue = ['TBD', 'Location to be announced'];
    // const venue = data[0].venue.split(".") ;
    // if (venue[0] == "TBD") {
    //     let temp = venue[1];
    //     venue[0] = venue[1].replace("TBD", "");
    //     venue[1] = "Location to be announced";
    // }

    return (
        <div className='event-bundled-cont'>
            <div className={styles.EventBundledItems}>
                {data.map((item) => (
                    <EventSingle
                        key={item.id}
                        data={item}
                        sourceParam={sourceParam}
                        bundled
                    />
                ))}
            </div>
        </div>
    );
};
