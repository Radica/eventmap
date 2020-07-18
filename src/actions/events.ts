import {
    ThunkDispatch,
    ThunkState,
    ThunkAction,
    AppState,
    GET_EVENTS,
} from '../types';

export const fetchEvents = (): ThunkAction => (dispatch: ThunkDispatch) => {
    return dispatch({
        type: GET_EVENTS,
        payload: {
            request: {
                method: 'GET',
                url: '/wp-json/wp/v2/map_stories',
            },
        },
    });
};

/* istanbul ignore next */
const shouldFetchEvents = (state: AppState): boolean => {
    if (state.home.readyStatus === 'success') return false;

    return true;
};

/* istanbul ignore next */
export const fetchEventsIfNeeded = (): ThunkAction => (
    dispatch: ThunkDispatch,
    getState: ThunkState
) => {
    /* istanbul ignore next */
    if (shouldFetchEvents(getState())) return dispatch(fetchEvents());
    /* istanbul ignore next */
    return null;
};
