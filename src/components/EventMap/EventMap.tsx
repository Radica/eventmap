import React, { useRef } from 'react';
import MapboxGL from 'mapbox-gl';
import ReactMapboxGL, {
    GeoJSONLayer,
    ScaleControl,
    Source,
    RotationControl,
    ZoomControl,
    Layer,
    Feature,
    Popup,
    MapContext,
} from 'react-mapbox-gl';
// @ts-ignore-next-line
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import DrawControl from 'react-mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

import type { ReactNode } from 'react';
import type { Map as MapType, GeoJSONSourceRaw } from 'mapbox-gl';

import MapControl from './MapControl';

import styles from './styles.scss';

const Map = ReactMapboxGL({
    accessToken: __MAPBOX_ACCESS_TOKEN__,
    attributionControl: false,
});

type DrawHandler = (event: any) => void;
type Props = {
    onMapCreate: (p0: MapType) => ReactNode;
    onDrawCreate: DrawHandler;
    onDrawUpdate: DrawHandler;
    source: GeoJSONSourceRaw;
};

export default ({ source, onMapCreate, onDrawCreate, onDrawUpdate }: Props) => {
    const mapRef = useRef<MapType>(null);

    return (
        <Map
            style="mapbox://styles/darvelo/ckaw4duhu2uhd1iph8qkys7lm/draft" // eslint-disable-line
            className={styles.map}
            center={[-74.005, 40.705]}
            zoom={[9.9]}
        >
            {/* Pass the map back to its parent. */}
            <MapContext.Consumer>{onMapCreate}</MapContext.Consumer>
            {/* Pass the map back to the geocoder. */}
            <MapContext.Consumer>
                {(map: MapType) => {
                    mapRef.current = map;
                    return null;
                }}
            </MapContext.Consumer>

            {/* A GeoJSON FeatureCollection layered automatically with GeoJSONLayer. */}
            {source && (
                <GeoJSONLayer
                    data={source.data}
                    fillPaint={{
                        'fill-color': '#43C59E',
                        'fill-opacity': 1,
                    }}
                />
            )}
            {/* A GeoJSON FeatureCollection layered manually with a Source/Layer pair. */}
            {source && <Source id="source_id" geoJsonSource={source} />}
            {source && (
                <Layer
                    type="fill"
                    id="layer_id"
                    sourceId="source_id"
                    paint={{
                        'fill-color': '#000',
                        'fill-opacity': 0.7,
                    }}
                />
            )}

            {/* A simple point feature. */}
            <Layer type="symbol" layout={{ 'icon-image': 'harbor-15' }}>
                <Feature coordinates={[-74.005, 40.705]} />
            </Layer>

            {/* A popup. */}
            <Popup coordinates={[-74.005, 40.705]}>
                <h1>Popup</h1>
            </Popup>

            {/* A set of map controls. */}
            <ZoomControl />
            <ScaleControl />
            <RotationControl />
            <DrawControl
                onDrawCreate={onDrawCreate}
                onDrawUpdate={onDrawUpdate}
                displayControlsDefault={false}
                controls={{ polygon: true, trash: true }}
            />
            {/* The Geocoder control is a third-party plugin, so it needs a special init. */}
            <MapControl
                control={
                    new MapboxGeocoder({
                        accessToken: __MAPBOX_ACCESS_TOKEN__,
                        mapboxgl: MapboxGL,
                    })
                }
                position="top-left"
            />
        </Map>
    );
};
