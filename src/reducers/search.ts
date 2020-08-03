import {
    SearchState,
    SearchAction,
    SEARCH_SET_FILTERS,
    SEARCH_SET_QUERY,
    SEARCH_SET_RESULTS,
    SEARCH_ERROR_RESULTS,
    SEARCH_SET_SELECTED_RESULT,
    SEARCH_RESET_FILTERS,
    SEARCH_MAP_IS_LOADED,
    SEARCH_UPDATE_MAP_INFORMATION,
    SEARCH_SELECT_LOCATION,
    GET_EVENTS_MANUALLY_SUCCESS,
    UPDATE_SOURCE_PARAM,
} from '../types';

const defaultState: SearchState = {
    activeFilters: [], // null,
    bounds: null,
    center: null,
    chosenResult: null,
    chosenLocation: null,
    searchQuery: null,
    searchResults: [],
    sourceParam: null,
    zoom: null,
};

export default function (state = defaultState, action: SearchAction) {
    switch (action.type) {
        case UPDATE_SOURCE_PARAM:
            return {
                ...state,
                sourceParam: action.data.source,
            };
        case SEARCH_RESET_FILTERS:
            return {
                ...state,
                activeFilters: defaultState.activeFilters,
            };
        case SEARCH_MAP_IS_LOADED:
            return {
                ...state,
                map: action.data,
            };
        case SEARCH_UPDATE_MAP_INFORMATION:
            return {
                ...state,
                zoom: action.data.zoom || state.zoom,
                center: action.data.center || state.center,
                bounds: action.data.bounds || state.bounds,
            };
        case SEARCH_SELECT_LOCATION:
            return {
                ...state,
                chosenLocation: action.data,
            };
        case SEARCH_SET_QUERY:
            return {
                ...state,
                searchQuery: action.data,
            };
        case SEARCH_SET_FILTERS:
            return {
                ...state,
                activeFilters: action.data.filters,
            };
        case SEARCH_SET_RESULTS:
            return {
                ...state,
                searchResults: action.data,
            };
        case SEARCH_SET_SELECTED_RESULT:
            return {
                ...state,
                chosenResult: action.data.formatted_address,
                // searchQuery: action.data.
                // bounds: action.data.geometry.bounds,
                // center: action.data.geometry.location,
            };
        case GET_EVENTS_MANUALLY_SUCCESS:
            return {
                ...state,
                activeFilters:
                    state.activeFilters.length === 0
                        ? Array.from(
                              action.payload.data.reduce((memo, mapEntity) => {
                                  memo.add(mapEntity.acf.map_content_type);
                                  return memo;
                              }, new Set())
                          )
                        : state.activeFilters,
            };
        default:
            return state;
    }
}