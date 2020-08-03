import {
    ThunkDispatch,
    ThunkState,
    ThunkAction,
    AppState,
    GetEventsPayload,
    GET_EVENTS_MANUALLY_REQUEST,
    GET_EVENTS_MANUALLY_SUCCESS,
    GET_EVENTS_MANUALLY_FAIL,
} from '../types';

import requestClient from '../utils/requestClient';

const EVENTS_PER_PAGE = 100;

async function getEvents(): Promise<Array<GetEventsPayload>> {
    let results: Array<GetEventsPayload> = [];
    const firstPageResponse = await requestClient.request({
        method: 'GET',
        url: '/wp-json/wp/v2/map_stories',
        params: {
            per_page: EVENTS_PER_PAGE,
        },
    });

    results = [...results, ...firstPageResponse.data];

    const totalPages = Number(
        firstPageResponse.headers['x-wp-totalpages'] || 1
    );

    const pagePromises = [];
    for (let page = 2; page <= totalPages; page += 1) {
        const pagePromise = requestClient.request({
            method: 'GET',
            url: `/wp-json/wp/v2/map_stories`,
            params: {
                // @ts-ignore-next-line
                per_page: EVENTS_PER_PAGE,
                page,
            },
        });
        pagePromises.push(pagePromise);
    }

    const pagesResults = await Promise.all(pagePromises);
    pagesResults.forEach((pageResult) => {
        results = [...results, ...pageResult.data];
    });

    return results;
}

export const fetchEvents = (): ThunkAction => async (
    dispatch: ThunkDispatch
) => {
    dispatch({ type: GET_EVENTS_MANUALLY_REQUEST });

    try {
        const data = await getEvents();
        /* istanbul ignore next */
        dispatch({
            type: GET_EVENTS_MANUALLY_SUCCESS,
            payload: {
                data,
            },
        });
    } catch (err) {
        /* istanbul ignore next */
        dispatch({
            type: GET_EVENTS_MANUALLY_FAIL,
            payload: {
                data: err.message,
            },
        });
    }
};

// export const fetchEvents = (): ThunkAction => (dispatch: ThunkDispatch) => {
//     return dispatch({
//         type: GET_EVENTS,
//         payload: {
//             request: {
//                 method: 'GET',
//                 url: '/wp-json/wp/v2/map_stories',
//                 params: {
//                     per_page: 100,
//                 },
//             },
//         },
//     });
// };

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
