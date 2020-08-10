import React from 'react';
import ReactMapboxGL, {
    Layer,
    Feature,
    Marker,
    Popup,
    ZoomControl,
} from 'react-mapbox-gl';

import GreenMarkerIcon from '../assets/images/GREEN_noun_Map_Marker_340172.png';
import YellowMarkerIcon from '../assets/images/YELLOW_noun_Map_Marker_340172.png';

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
                offset={{
                    bottom: [0, -56],
                    'bottom-left': [0, -56],
                    'bottom-right': [0, -56],
                }}
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

                    {activeFilters.includes('action') &&
                        eventsData
                            .filter((events) =>
                                events.some(
                                    (event) => event.contentType === 'action'
                                )
                            )
                            .map((event) => (
                                <Marker
                                    key={event[0].id}
                                    coordinates={[
                                        event[0].longitude,
                                        event[0].latitude,
                                    ]}
                                    anchor="bottom"
                                    onClick={(evt) => {
                                        console.log(event);
                                        handleFeatureClick(event);
                                    }}
                                >
                                    <img
                                        className={styles.Marker}
                                        alt="event marker icon"
                                        src={YellowMarkerIcon}
                                    />
                                </Marker>
                            ))}

                    {activeFilters.includes('organization') &&
                        eventsData
                            .filter((events) =>
                                events.some(
                                    (event) =>
                                        event.contentType === 'organization'
                                )
                            )
                            .map((event) => (
                                <Marker
                                    key={event[0].id}
                                    coordinates={[
                                        event[0].longitude,
                                        event[0].latitude,
                                    ]}
                                    anchor="bottom"
                                    onClick={(evt) => {
                                        console.log(event);
                                        handleFeatureClick(event);
                                    }}
                                >
                                    <img
                                        className={styles.Marker}
                                        alt="event marker icon"
                                        src={GreenMarkerIcon}
                                    />
                                </Marker>
                            ))}

                    {clickedItem && this.renderPopup()}
                </Map>
            </div>
        );
    }
}

export default MapView;

/**
 *
 *  <Layer
                  type="circle"
                  id="volunteerData"
                  layout={{
                    'visibility': this.props.showVolunteer ? 'visible' : 'none',
                  }}
                  paint={{
                    "circle-radius": 5,
                    "circle-color": "#440099",
                    "circle-stroke-width": 2,
                    "circle-stroke-color": "#ffb900"
                  }}>
                {
                  this.props.volunteerData.map((data, ind) => (
                      <Feature key={ind}
                        coordinates={[data[0].lng, data[0].lat]}
                        onClick={(e)=>{ this.props.handleFeatureClick(data); }}/>
                  ))
                }
              </Layer>

              <Layer
                  type="circle"
                  id="meetData"
                  layout={{
                    'visibility': this.props.showMeet ? 'visible' : 'none',
                  }}
                  paint={{
                    "circle-radius": 5,
                    "circle-color": "#c4b4dd",
                    "circle-stroke-width": 2,
                    "circle-stroke-color": "#5e2ba6"
                  }}>
                {
                  this.props.meetData.map((data, ind) => (
                      <Feature key={ind}
                        coordinates={[data[0].lng, data[0].lat]}
                        onClick={(e)=>{ this.props.handleFeatureClick(data); }}/>
                  ))
                }
              </Layer>

              <Layer
                  type="circle"
                  id="phonebankData"
                  layout={{
                    'visibility': this.props.showPhonebank ? 'visible' : 'none',
                  }}
                  paint={{
                    "circle-radius": 5,
                    "circle-color": "#440099",
                    "circle-stroke-width": 2,
                    "circle-stroke-color": "#ffb900"
                  }}>
                {
                  this.props.phonebankData.map((data, ind) => (
                      <Feature key={ind}
                        coordinates={[data[0].lng, data[0].lat]}
                        onClick={(e)=>{ this.props.handleFeatureClick(data); }}/>
                  ))
                }
              </Layer>
              */
