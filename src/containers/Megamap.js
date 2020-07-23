import React from 'react';

import { connect } from 'react-redux';

import ListArea from '../components/ListArea';
import MapArea from '../components/MapArea';
import MapContainer from './MapContainer';
import ListContainer from './ListContainer';
import SearchContainer from './SearchContainer';

import { fetchEventsIfNeeded } from '../actions/events';
import { history } from '../utils/store';

class Megamap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { fetchEventsIfNeeded: loadEvents } = this.props;
        loadEvents();
    }

    render() {
        return (
            <>
                <ListArea>
                    <SearchContainer history={history} />
                    <ListContainer history={history} />
                </ListArea>
                <MapArea>
                    <MapContainer history={history} />
                </MapArea>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchEventsIfNeeded: () => {
        dispatch(fetchEventsIfNeeded());
    },
});

export default connect(null, mapDispatchToProps)(Megamap);
