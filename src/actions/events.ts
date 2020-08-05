import fetchJsonp from 'fetch-jsonp';

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
const API_BASEURL = __API_BASEURL__;

async function jsonpRequest({
    page,
}: {
    page: number;
}): Promise<Array<GetEventsPayload>> {
    const response = await fetchJsonp(
        `${API_BASEURL}/?rest_route=/wp/v2/map_stories&per_page=${EVENTS_PER_PAGE}&page=${page}`,
        {
            jsonpCallback: '_jsonp',
        }
    );
    const json = await response.json();

    if (json && json.data && json.data.status === 400) {
        throw new Error('end of pages');
    } else {
        return json;
    }
}

async function getPagesWithJsonp(
    { currentPage }: { currentPage: number },
    results: Array<GetEventsPayload>
): Promise<Array<GetEventsPayload>> {
    return jsonpRequest({ page: currentPage })
        .then((response) => {
            const newResults = [...results, ...response];
            if (response.length === EVENTS_PER_PAGE) {
                // there's probably another page. Fetch it.
                return getPagesWithJsonp(
                    {
                        currentPage: currentPage + 1,
                    },
                    newResults
                );
            }
            return newResults;
        })
        .catch(() => {
            return results;
        });
}

async function getEventsWithJsonp(): Promise<Array<GetEventsPayload>> {
    // receiveData({"code":"rest_post_invalid_page_number","message":"The page number requested is larger than the number of pages available.","data":{"status":400}})
    try {
        const results: Array<GetEventsPayload> = await getPagesWithJsonp(
            {
                currentPage: 1,
            },
            []
        );
        return results;
    } catch (e) {
        console.error('should never get here');
        return [];
    }
}

async function getEventsWithCORS(): Promise<Array<GetEventsPayload>> {
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

async function getEvents(): Promise<Array<GetEventsPayload>> {
    if (API_BASEURL === window.location.origin) {
        return getEventsWithCORS();
    }

    return getEventsWithJsonp();
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
