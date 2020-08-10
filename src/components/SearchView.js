import React, {
    useCallback,
    useState,
    useEffect,
    useLayoutEffect,
} from 'react';
import MapboxGL from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

import styles from './SearchView.css';

export default ({
    activeFilters,
    eventTypes,
    handleFilterChange,
    handleSearch,
    map,
    searchQuery,
}) => {
    const [lastSearchQuery, setLastSearchQuery] = useState(null);
    const [geocoder] = useState(
        new MapboxGeocoder({
            accessToken: __MAPBOX_ACCESS_TOKEN__,
            countries: 'us',
            enableEventLogging: false,
            marker: {
                anchor: 'bottom',
                color: 'orange',
            },
            mapboxgl: MapboxGL,
            placeholder: 'City, State, and/or Zip Code',
            zoom: 9,
        })
    );
    const [geocoderEl, setGeocoderEl] = useState(null);
    const geocoderParentRef = useCallback(
        (node) => {
            if (map && node && geocoderEl) {
                geocoderEl.classList.add(styles.SearchText);
                node.appendChild(geocoderEl);
            }
        },
        [map, geocoderEl]
    );

    useEffect(() => {
        if (map && geocoder) {
            setGeocoderEl(geocoder.onAdd(map));
        }
    }, [map, geocoder]);

    useLayoutEffect(() => {
        if (geocoderEl && searchQuery && searchQuery !== lastSearchQuery) {
            geocoder.query(searchQuery);
        }
    }, [geocoder, geocoderEl, searchQuery, lastSearchQuery]);

    useLayoutEffect(() => {
        function onSelectSearchResult(event) {
            const { id } = event.result;
            handleSearch(id);
            setLastSearchQuery(id);
            geocoderEl.querySelector('input').blur();
        }

        geocoder.on('result', onSelectSearchResult);
        return () => geocoder.off('result', onSelectSearchResult);
    }, [geocoder, geocoderEl, handleSearch]);

    useLayoutEffect(() => {
        function onClearSearch() {
            handleSearch(null);
            if (map) {
                map.fitBounds([
                    [-65.27952974884487, 54.281353451957585],
                    [-127.3735738860654, 19.084515887021055],
                ]);
            }
        }

        if (map && geocoder) {
            geocoder.on('clear', onClearSearch);
        }

        return () => {
            if (map && geocoder) {
                geocoder.off('clear', onClearSearch);
            }
        };
    }, [geocoder, map, handleSearch]);

    return (
        <div className={styles.SearchContainer}>
            <div className={styles.SearchViewport}>
                <div className={styles.SearchForm} ref={geocoderParentRef} />
            </div>

            <form
                className={styles.FilterForm}
                style={{
                    display: eventTypes.length > 0 ? 'block' : 'none',
                }}
            >
                <ul>
                    {eventTypes.map((eventType) => (
                        <li key={eventType}>
                            <input
                                type="checkbox"
                                name="f[]"
                                value={eventType}
                                id={eventType}
                                onChange={handleFilterChange}
                                checked={
                                    eventType &&
                                    activeFilters.includes(eventType)
                                        ? 'checked'
                                        : false
                                }
                            />
                            <label htmlFor={eventType}>
                                <span
                                    className={`${styles.EventFilterIcon} ${
                                        eventType === 'action'
                                            ? styles.EventFilterIconAction
                                            : ''
                                    } ${
                                        eventType === 'story'
                                            ? styles.EventFilterIconStory
                                            : ''
                                    }`}
                                />
                                <span>{eventType}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    );
};
