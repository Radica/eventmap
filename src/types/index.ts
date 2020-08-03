import { RouterState } from 'connected-react-router';
import { ThunkAction as Act, ThunkDispatch as Dispatch } from 'redux-thunk';

type HomeReadyStatus = 'request' | 'success' | 'failure' | 'invalid';

export type Event = {
    id: number;
    title: string;
    url: string;
    modifiedAt: string;
    content: string;
    contentType: string;
    latitude: number;
    longitude: number;
};

// Reducers
export interface HomeState {
    readyStatus: HomeReadyStatus;
    err: any;
    eventTypes: Array<string>;
    eventsData: Array<Event>;
}

export interface SearchState {
    searchQuery: string;
    activeFilters: Array<string>;
    zoom: number;
    center: [number, number];
    bounds: [number, number];
    searchResults: Array<any>;
    chosenResult: any;
    chosenLocation: string;
    sourceParam: any;
}

export interface AppState {
    home: HomeState;
    router: RouterState;
}

export type ThunkState = () => AppState;

// Actions
export const GET_EVENTS_MANUALLY_REQUEST = 'GET_EVENTS_MANUALLY_REQUEST';
export const GET_EVENTS_MANUALLY_SUCCESS = 'GET_EVENTS_MANUALLY_SUCCESS';
export const GET_EVENTS_MANUALLY_FAIL = 'GET_EVENTS_MANUALLY_FAIL';

export const SEARCH_SET_FILTERS = 'SEARCH_SET_FILTERS';
export const SEARCH_SET_RESULTS = 'SEARCH_SET_RESULTS';
export const SEARCH_ERROR_RESULTS = 'SEARCH_ERROR_RESULTS';
export const SEARCH_SET_SELECTED_RESULT = 'SEARCH_SET_SELECTED_RESULT';
export const SEARCH_SET_QUERY = 'SEARCH_SET_QUERY';
export const UPDATE_SOURCE_PARAM = 'UPDATE_SOURCE_PARAM';
export const SEARCH_RESET_FILTERS = 'SEARCH_RESET_FILTERS';
export const SEARCH_MAP_IS_LOADED = 'SEARCH_MAP_IS_LOADED';
export const SEARCH_UPDATE_MAP_INFORMATION = 'SEARCH_UPDATE_MAP_INFORMATION';
export const SEARCH_SELECT_LOCATION = 'SEARCH_SELECT_LOCATION';

export interface GetEventsManuallyRequestAction {
    type: typeof GET_EVENTS_MANUALLY_REQUEST;
}

export type GetEventsPayload = {
    id: number;
    title: {
        rendered: string;
    };
    link: string;
    modified_gmt: string;
    content: {
        rendered: string;
    };
    acf: {
        map_content_type: string;
        latitude: string;
        longitude: string;
    };
};

export interface SearchAction {
    type:
        | typeof GET_EVENTS_MANUALLY_SUCCESS
        | typeof SEARCH_SET_FILTERS
        | typeof SEARCH_SET_QUERY
        | typeof SEARCH_SET_RESULTS
        | typeof SEARCH_ERROR_RESULTS
        | typeof SEARCH_SET_SELECTED_RESULT
        | typeof UPDATE_SOURCE_PARAM
        | typeof SEARCH_RESET_FILTERS
        | typeof SEARCH_MAP_IS_LOADED
        | typeof SEARCH_UPDATE_MAP_INFORMATION
        | typeof SEARCH_SELECT_LOCATION;
    payload: {
        data: Array<GetEventsPayload>;
    };
    data: any;
}

export interface GetEventsAction {
    type:
        | typeof GET_EVENTS_MANUALLY_REQUEST
        | typeof GET_EVENTS_MANUALLY_SUCCESS
        | typeof GET_EVENTS_MANUALLY_FAIL;
    payload: {
        data: Array<GetEventsPayload>;
    };
}

export type MapAction = GetEventsManuallyRequestAction | GetEventsAction;

export type MyAction = MapAction;

export type ThunkAction = Act<void, AppState, null, MyAction>;

export type ThunkDispatch = Dispatch<AppState, void, MyAction>;
