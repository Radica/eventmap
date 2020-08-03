import React from 'react';

import { connect } from 'react-redux';

import ListArea from '../components/ListArea';
import MapArea from '../components/MapArea';
import ListContainer from './ListContainer';
import AsyncSearchContainer from './AsyncSearchContainer';
import AsyncMapContainer from './AsyncMapContainer';

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
                    <AsyncSearchContainer history={history} />
                    <ListContainer history={history} />
                </ListArea>
                <MapArea>
                    <AsyncMapContainer history={history} />
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
