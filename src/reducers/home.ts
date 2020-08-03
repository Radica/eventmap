import {
    HomeState,
    GetEventsAction,
    GET_EVENTS_MANUALLY_REQUEST,
    GET_EVENTS_MANUALLY_SUCCESS,
    GET_EVENTS_MANUALLY_FAIL,
} from '../types';

// Export for unit testing
export const initialState: HomeState = {
    readyStatus: 'invalid',
    err: null,
    eventTypes: [],
    eventsData: [],
};

export default (state = initialState, action: GetEventsAction) => {
    switch (action.type) {
        case GET_EVENTS_MANUALLY_REQUEST:
            return {
                ...state,
                readyStatus: 'request',
            };
        case GET_EVENTS_MANUALLY_SUCCESS:
            return {
                ...state,
                readyStatus: 'success',
                eventTypes: Array.from(
                    action.payload.data.reduce((memo, mapEntity) => {
                        memo.add(mapEntity.acf.map_content_type);
                        return memo;
                    }, new Set())
                ),
                eventsData: action.payload.data.map((mapEntity) => ({
                    id: mapEntity.id,
                    title: mapEntity.title.rendered,
                    content: mapEntity.content.rendered.trim(),
                    contentType: mapEntity.acf.map_content_type,
                    latitude: Number(mapEntity.acf.latitude),
                    longitude: Number(mapEntity.acf.longitude),
                })),
            };
        case GET_EVENTS_MANUALLY_FAIL:
            return {
                ...state,
                readyStatus: 'failure',
                err: action.payload.data,
            };
        default:
            return state;
    }
};
