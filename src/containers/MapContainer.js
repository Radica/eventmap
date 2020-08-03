import React from 'react';
import { connect } from 'react-redux';

import MapView from '../components/MapView';
import searchAction from '../actions/search';

class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedItem: null,
        };

        this.handleFeatureClick = this.handleFeatureClick.bind(this);
        this.handleClosePopup = this.handleClosePopup.bind(this);
        this.handleMapChange = this.handleMapChange.bind(this);
        this.handleMapLoad = this.handleMapLoad.bind(this);
    }

    handleFeatureClick(item) {
        console.log('ITEM', item);
        this.setState({ clickedItem: item });
    }

    handleClosePopup() {
        this.setState({ clickedItem: null });
    }

    handleMapChange(bounds, center, zoom) {
        const { updateMap } = this.props;
        updateMap(
            {
                northeast: bounds.getNorthEast(),
                southwest: bounds.getSouthWest(),
            },
            [center.lng, center.lat],
            [zoom]
        );
    }

    handleMapLoad(map) {
        const { setMap } = this.props;
        setMap(map);
    }

    render() {
        const {
            activeFilters,
            meetData,
            eventsData,
            center,
            bounds,
            zoom,
            history,
            sourceParam,
        } = this.props;

        const { clickedItem } = this.state;
        return (
            <MapView
                activeFilters={activeFilters}
                meetData={meetData}
                handleFeatureClick={this.handleFeatureClick}
                clickedItem={clickedItem}
                handleClosePopup={this.handleClosePopup}
                eventsData={eventsData}
                center={center}
                bounds={bounds}
                zoom={zoom}
                initialBounds={[
                    [-65.27952974884462, 48.05516321240586],
                    [-127.37357388606493, 28.186236096579478],
                ]}
                handleMapChange={this.handleMapChange}
                handleMapLoad={this.handleMapLoad}
                history={history}
                sourceParam={sourceParam}
            />
        );
    }
}

const mapStateToProps = ({ home, /* events, */ search }) => ({
    eventsData: Object.values(
        home.eventsData
            .sort((a, b) => new Date(b.modifiedAt) - new Date(a.modifiedAt))
            .reduce((acc, curr) => {
                const key = `${curr.longitude},${curr.latitude}`;
                if (acc && !acc[key]) {
                    acc[key] = [curr];
                } else {
                    acc[key] = [...acc[key], curr];
                }
                return acc;
            }, {})
    ),
    activeFilters: search.activeFilters,
    center: search.center,
    bounds: search.bounds,
    zoom: search.zoom,
    sourceParam: search.sourceParam,
});

const mapDispatchToProps = (dispatch) => ({
    updateMap: (bounds, center, zoom) => {
        dispatch(searchAction.updateMap(bounds, center, zoom));
    },
    setMap: (map) => {
        dispatch(searchAction.setMap(map));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
