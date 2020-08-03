import {
    SEARCH_SET_FILTERS,
    SEARCH_SET_QUERY,
    SEARCH_SET_RESULTS,
    SEARCH_ERROR_RESULTS,
    SEARCH_SET_SELECTED_RESULT,
    UPDATE_SOURCE_PARAM,
    SEARCH_SELECT_LOCATION,
    SEARCH_RESET_FILTERS,
    SEARCH_UPDATE_MAP_INFORMATION,
    SEARCH_MAP_IS_LOADED,
} from '../types';

const updateSourceParam = (source: string) => ({
    type: UPDATE_SOURCE_PARAM,
    data: { source },
});

const setFilters = (filters: Array<string>) => {
    return {
        type: SEARCH_SET_FILTERS,
        data: { filters },
    };
};

const clearSearchResults = () => {
    return {
        type: SEARCH_SET_RESULTS,
        data: {},
    };
};

const selectResult = (item: any) => {
    return {
        type: SEARCH_SET_SELECTED_RESULT,
        data: item,
    };
};

const search = (location: string) => {
    return {
        type: SEARCH_SELECT_LOCATION,
        data: location,
    };
};

const resetFilters = () => {
    return {
        type: SEARCH_RESET_FILTERS,
    };
};

const updateMap = (
    bounds: { northeast: number; southwest: number } = null,
    center: [number, number] = null,
    zoom: [number] = null
) => {
    return {
        type: SEARCH_UPDATE_MAP_INFORMATION,
        data: {
            bounds,
            center,
            zoom,
        },
    };
};

const setMap = (map: any) => {
    return {
        type: SEARCH_MAP_IS_LOADED,
        data: map,
    };
};

export default {
    setFilters,
    search,
    clearSearchResults,
    selectResult,
    updateMap,
    setMap,
    resetFilters,
    updateSourceParam,
};
