import axios from 'axios';

export default axios.create({
    baseURL: __API_BASEURL__,
    responseType: 'json',
    // withCredentials can't be true when Access-Control-Allow-Origin is '*'.
    withCredentials: !__DEV__,
});
