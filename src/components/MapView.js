import React from 'react';
import ReactMapboxGL, {
    Layer,
    Feature,
    Popup,
    ZoomControl,
} from 'react-mapbox-gl';

import { ORGANIZATION_COLOR, ACTION_COLOR } from '../theme/variables';

import MapPopupItem from './MapPopupItem';

import styles from './MapView.css';

const Map = ReactMapboxGL({
    accessToken: __MAPBOX_ACCESS_TOKEN__,
    attributionControl: false,
    minZoom: 2,
    maxZoom: 8,
    scrollZoom: false,
});

class MapView extends React.Component {
    constructor(props) {
        super(props);
        this.handleStyleLoad = this.handleStyleLoad.bind(this);
    }

    handleStyleLoad(map) {
        this.map = map;
        // map.setCenter({
        //     lng: -96.32655181745479,
        //     lat: 38.80834427056388,
        // });
        // map.setZoom(10);

        map.on('moveend', (event) => {
            const { handleMapChange } = this.props;
            handleMapChange(map.getBounds(), map.getCenter(), map.getZoom());
        });

        const { handleMapLoad, center, initialBounds } = this.props;
        handleMapLoad(map);

        if (center) {
            map.setCenter({ lng: center[0], lat: center[1] });
            map.setZoom(7);
        }

        if (initialBounds) {
            map.fitBounds(initialBounds, { animate: false });
        }
    }

    renderPopup() {
        const {
            activeFilters,
            clickedItem: bundledEvents,
            handleClosePopup,
            sourceParam,
        } = this.props;

        const events = bundledEvents.filter((event) => {
            return activeFilters.includes(event.contentType);
        });

        if (events.length === 0) {
            handleClosePopup();
            return null;
        }

        return (
            <Popup
                coordinates={[
                    bundledEvents[0].longitude,
                    bundledEvents[0].latitude,
                ]}
            >
                <MapPopupItem
                    bundledEvents={events}
                    handleClosePopup={handleClosePopup}
                    sourceParam={sourceParam}
                />
            </Popup>
        );
    }

    render() {
        const {
            activeFilters,
            zoom,
            center,
            eventsData,
            handleFeatureClick,
            clickedItem,
        } = this.props;

        console.log('this.props.eventsData, zoom >> ', eventsData, zoom);

        return (
            <div className={styles.MapView}>
                <Map
                    ref={(e) => {
                        this.map = e;
                    }}
                    onStyleLoad={this.handleStyleLoad}
                    style="mapbox://styles/darvelo/ckcsfj0cz1r9x1jpk95fs019r" // eslint-disable-line
                    className="map-view-container"
                    zoom={zoom}
                    interactive
                    center={center}
                    movingMethod="easeTo"
                    containerStyle={{
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <ZoomControl position="top-right" />

                    {activeFilters.includes('action') && (
                        <Layer
                            id="action"
                            type="circle"
                            layout={{
                                visibility: 'visible',
                            }}
                            paint={{
                                'circle-radius': 5,
                                'circle-color': ACTION_COLOR,
                                'circle-stroke-width': 2,
                                'circle-stroke-color': 'white',
                            }}
                        >
                            {eventsData
                                .filter((events) =>
                                    events.some(
                                        (event) =>
                                            event.contentType === 'action'
                                    )
                                )
                                .map((event) => (
                                    <Feature
                                        key={event[0].id}
                                        coordinates={[
                                            event[0].longitude,
                                            event[0].latitude,
                                        ]}
                                        onClick={(evt) => {
                                            console.log(event);
                                            handleFeatureClick(event);
                                        }}
                                    />
                                ))}
                        </Layer>
                    )}

                    {activeFilters.includes('organization') && (
                        <Layer
                            id="organization"
                            type="circle"
                            layout={{
                                visibility: 'visible',
                            }}
                            paint={{
                                'circle-radius': 5,
                                'circle-color': ORGANIZATION_COLOR,
                                'circle-stroke-width': 2,
                                'circle-stroke-color': 'white',
                            }}
                        >
                            {eventsData
                                .filter((events) =>
                                    events.some(
                                        (event) =>
                                            event.contentType === 'organization'
                                    )
                                )
                                .map((event) => (
                                    <Feature
                                        key={event[0].id}
                                        coordinates={[
                                            event[0].longitude,
                                            event[0].latitude,
                                        ]}
                                        onClick={(evt) => {
                                            console.log(event);
                                            handleFeatureClick(event);
                                        }}
                                    />
                                ))}
                        </Layer>
                    )}

                    {clickedItem && this.renderPopup()}
                </Map>
            </div>
        );
    }
}

export default MapView;
