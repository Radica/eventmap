import React from 'react';
import ReactMapboxGL, {
    Layer,
    Feature,
    Marker,
    Popup,
    ZoomControl,
} from 'react-mapbox-gl';

import { STORY_COLOR, ACTION_COLOR } from '../theme/variables';
import MarkerIcon from '../assets/images/marker.png';

import MapPopupItem from './MapPopupItem';

import styles from './MapView.css';

const Map = ReactMapboxGL({
    accessToken: __MAPBOX_ACCESS_TOKEN__,
    attributionControl: false,
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
            map.setZoom(14);
        }

        if (initialBounds) {
            map.fitBounds(initialBounds, { animate: false });
        }
    }

    renderPopup() {
        const {
            clickedItem: popup,
            handleClosePopup,
            sourceParam,
        } = this.props;

        return (
            <Popup coordinates={[popup[0].longitude, popup[0].latitude]}>
                <MapPopupItem
                    popup={popup}
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
                    style="mapbox://styles/darvelo/ckcsfj0cz1r9x1jpk95fs019r/draft" // eslint-disable-line
                    className="map-view-container"
                    zoom={zoom || [3.9564829608493017]}
                    interactive
                    center={center || [-96.32655181745479, 38.80834427056388]}
                    movingMethod="easeTo"
                    containerStyle={{
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <ZoomControl position="top-right" />

                    {/*
                    <Marker
                        coordinates={[-98.5795, 39.8283]}
                        anchor="bottom"
                    >
                        <img alt="event marker icon" src={MarkerIcon} />
                    </Marker>
                     */}

                    {/*
                    <Layer type="symbol" layout={{ 'icon-image': 'harbor-15' }}>
                        <Feature coordinates={[-74.005, 40.705]} />
                    </Layer>
                     */}

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
                                .filter(
                                    (event) => event[0].contentType === 'action'
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

                    {activeFilters.includes('story') && (
                        <Layer
                            id="story"
                            type="circle"
                            layout={{
                                visibility: 'visible',
                            }}
                            paint={{
                                'circle-radius': 5,
                                'circle-color': STORY_COLOR,
                                'circle-stroke-width': 2,
                                'circle-stroke-color': 'white',
                            }}
                        >
                            {eventsData
                                .filter(
                                    (event) => event[0].contentType === 'story'
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
