import { RouterState } from 'connected-react-router';
import { ThunkAction as Act, ThunkDispatch as Dispatch } from 'redux-thunk';

type HomeReadyStatus = 'request' | 'success' | 'failure' | 'invalid';

export type Event = {
    id: number;
    title: string;
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
    zipcodes: Array<any>;
    chosenZipcode: any;
    sourceParam: any;
}

export interface AppState {
    home: HomeState;
    router: RouterState;
}

export type ThunkState = () => AppState;

// Actions
export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENTS_REQUEST = 'GET_EVENTS_REQUEST';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_FAIL = 'GET_EVENTS_FAIL';

export const SEARCH_SET_FILTERS = 'SEARCH_SET_FILTERS';
export const SEARCH_SET_RESULTS = 'SEARCH_SET_RESULTS';
export const SEARCH_ERROR_RESULTS = 'SEARCH_ERROR_RESULTS';
export const SEARCH_SET_SELECTED_RESULT = 'SEARCH_SET_SELECTED_RESULT';
export const SEARCH_SET_QUERY = 'SEARCH_SET_QUERY';
export const EVENTS_LOAD_EVENTS = 'EVENTS_LOAD_EVENTS';

type AxiosRequestPayload = {
    request: {
        method: 'GET';
        url: '/wp-json/wp/v2/map_stories';
    };
};

export interface GetEventsRequestAction {
    type: typeof GET_EVENTS;
    payload: AxiosRequestPayload;
}

export type GetEventsPayload = {
    id: number;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    acf: {
        map_content_type: string;
        latitude: string;
        longitude: string;
    };
};

export interface GetEventsAction {
    type:
        | typeof GET_EVENTS_REQUEST
        | typeof GET_EVENTS_SUCCESS
        | typeof GET_EVENTS_FAIL;
    payload: {
        data: Array<GetEventsPayload>;
    };
}

export type MapAction = GetEventsRequestAction | GetEventsAction;

export type MyAction = MapAction;

export type ThunkAction = Act<void, AppState, null, MyAction>;

export type ThunkDispatch = Dispatch<AppState, void, MyAction>;
