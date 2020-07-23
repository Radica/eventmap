import React from 'react';
import { connect } from 'react-redux';

import ListView from '../components/ListView';
import { getDistanceFromLatLonInKm } from '../helper';

const inBounds = (ne, sw, lnglat) => {
    const lng = (lnglat.lng - ne.lng) * (lnglat.lng - sw.lng) < 0;
    const lat = (lnglat.lat - ne.lat) * (lnglat.lat - sw.lat) < 0;
    return lng && lat;
};

const ListContainer = ({
    eventsData,
    center,
    activeFilters,
    eventTypes,
    sourceParam,
}) => {
    console.log('this.eventsData center', eventsData, center);
    return (
        <ListView
            activeFilters={activeFilters}
            eventsData={eventsData}
            eventTypes={eventTypes}
            sourceParam={sourceParam}
        />
    );
};

const getEvents = (events, search) => {
    return Object.values(
        events.eventsData
            .filter((item) => {
                const show =
                    (!item.event_type && search.activeFilters.includes('0')) ||
                    (!!item.event_type &&
                        !!item.event_type.event_type_mapping &&
                        search.activeFilters.includes(
                            item.event_type.event_type_mapping.id.toString()
                        ));

                if (!search.bounds) {
                    return show;
                }

                return (
                    show &&
                    inBounds(search.bounds.northeast, search.bounds.southwest, {
                        lng: item.longitude,
                        lat: item.latitude,
                    })
                );
            })
            .sort(
                (a, b) =>
                    new Date(a.datetime_start) - new Date(b.datetime_start)
            )
    );
};

const getClosestEvents = (events, search) => {
    if (!search.center) {
        return events.eventsData;
    }
    const centerLong = search.center[0];
    const centerLat = search.center[1];

    const eventsNearby = events.eventsData.sort(
        (a, b) =>
            getDistanceFromLatLonInKm(
                a.latitude,
                a.longitude,
                centerLat,
                centerLong
            ) -
            getDistanceFromLatLonInKm(
                b.latitude,
                b.longitude,
                centerLat,
                centerLong
            )
    );

    if (events.length > 10) {
        return eventsNearby.slice(0, 10);
    }
    return eventsNearby;
};

const mapStateToProps = ({ home, /* events, */ search }) => {
    const eventsData = getEvents(home, search);
    let closestEvents;
    if (eventsData.length === 0) {
        closestEvents = getClosestEvents(home, search);
    }

    console.log(
        'search.searchQuery, search.activeFilters',
        search.searchQuery === '' ? '<BLANK>' : search.searchQuery,
        search.activeFilters
    );

    return {
        activeFilters: search.activeFilters,
        center: search.center,
        eventsData: eventsData.length === 0 ? closestEvents : eventsData,
        eventTypes: home.eventTypes,
        searchQuery: search.searchQuery,
        sourceParam: search.sourceParam,
    };
};

export default connect(mapStateToProps)(ListContainer);
