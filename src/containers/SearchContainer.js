import React from 'react';
import { connect } from 'react-redux';

import SearchView from '../components/SearchView';
import searchAction from '../actions/search';

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: null,
        };

        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        const { history } = this.props;

        history.listen((location, action) => {
            if (action === 'POP') {
                this.handleHistoryChange(location);
            }
        });

        if (history.location.search !== '') {
            this.handleHistoryChange(history.location);
        }
    }

    handleHistoryChange(location) {
        const query = new URLSearchParams(location.search);
        const {
            updateSourceParam,
            searchLocation,
            setFilters,
            resetFilters,
        } = this.props;

        if (query.get('source')) {
            updateSourceParam(query.get('source'));
        }

        // if (!query.get('search') && !query.get('types')) {
        //     this.props.updateMap(null, [ -73.834, 40.676], [10]);
        // }

        if (query.get('search')) {
            this.setState({
                searchQuery: query.get('search'),
            });
            searchLocation(query.get('search'));
        }

        if (query.get('types')) {
            setFilters(query.get('types').split(','));
        } else if (query.get('search')) {
            resetFilters();
        }
    }

    // Store location ID when a search result is selected.
    handleSearch(placeId) {
        const { clearSearchResults } = this.props;
        clearSearchResults();

        this.setState(
            {
                searchQuery: placeId,
            },
            () => {
                const { searchQuery } = this.state;
                console.log('handling search', searchQuery);
                const { activeFilters, searchLocation } = this.props;
                searchLocation(searchQuery);
                this.handleHistoryPush(activeFilters);
            }
        );
    }

    handleHistoryPush(types) {
        const { searchQuery } = this.state;
        const { history, source } = this.props;

        const searchQueryParam = searchQuery ? `&search=${searchQuery}` : '';
        const typesParam =
            types && types.length > 0 ? `&types=${types.join(',')}` : '';
        const sourceParam = source ? `&source=${source}` : '';

        history.push(`?q=${searchQueryParam}${typesParam}${sourceParam}`);
    }

    handleFilterChange(event) {
        const { activeFilters, setFilters } = this.props;
        const selectedFilter = event.target.value;
        const updatedFilters = activeFilters.includes(selectedFilter)
            ? activeFilters.filter((filter) => filter !== selectedFilter) // remove filter
            : [...activeFilters, selectedFilter]; // add filter

        setFilters(updatedFilters);
        this.handleHistoryPush(updatedFilters);
    }

    render() {
        const { activeFilters, eventTypes, map } = this.props;
        const { searchQuery } = this.state;

        return (
            <SearchView
                activeFilters={activeFilters}
                eventTypes={eventTypes}
                handleFilterChange={this.handleFilterChange}
                handleSearch={this.handleSearch}
                map={map}
                searchQuery={searchQuery}
            />
        );
    }
}

const mapStateToProps = ({ search, home }) => ({
    activeFilters: search.activeFilters,
    chosenResult: search.chosenResult,
    chosenLocation: search.chosenLocation,
    eventTypes: home.eventTypes,
    map: search.map,
    searchQuery: search.searchQuery,
    searchResults: search.searchResults.results,
    source: search.sourceParam,
});

const mapDispatchToProps = (dispatch) => ({
    clearSearchResults: () => dispatch(searchAction.clearSearchResults()),
    resetFilters: () => dispatch(searchAction.resetFilters()),
    searchLocation: (text) => dispatch(searchAction.search(text)),
    selectResult: (item) => dispatch(searchAction.selectResult(item)),
    setFilters: (filters) => dispatch(searchAction.setFilters(filters)),
    updateSourceParam: (source) =>
        dispatch(searchAction.updateSourceParam(source)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
