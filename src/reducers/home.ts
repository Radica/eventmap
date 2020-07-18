import {
    HomeState,
    GetEventsAction,
    GET_EVENTS_REQUEST,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAIL,
} from '../types';

// Export for unit testing
export const initialState: HomeState = {
    readyStatus: 'invalid',
    err: null,
    events: [],
};

export default (state = initialState, action: GetEventsAction) => {
    switch (action.type) {
        case GET_EVENTS_REQUEST:
            return {
                ...state,
                readyStatus: 'request',
            };
        case GET_EVENTS_SUCCESS:
            return {
                ...state,
                readyStatus: 'success',
                events: action.payload.data.map((mapEntity) => ({
                    id: mapEntity.id,
                    title: mapEntity.title.rendered,
                    content: mapEntity.content.rendered.trim(),
                    contentType: mapEntity.acf.map_content_type,
                    lat: Number(mapEntity.acf.latitude),
                    long: Number(mapEntity.acf.longitude),
                })),
            };
        case GET_EVENTS_FAIL:
            return {
                ...state,
                readyStatus: 'failure',
                err: action.payload.data,
            };
        default:
            return state;
    }
};
