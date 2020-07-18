declare const __CLIENT__: boolean;
declare const __SERVER__: boolean;
declare const __DEV__: boolean;
declare const __API_BASEURL__: string;
declare const __MAPBOX_ACCESS_TOKEN__: string;

declare module '*.svg';
declare module '*.gif';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.webp';
declare module '*.css';
declare module '*.scss';

declare namespace NodeJS {
    interface Global {
        __CLIENT__: boolean;
        __SERVER__: boolean;
        __DEV__: boolean;
        __API_BASEURL__: string;
        __MAPBOX_ACCESS_TOKEN__: string;
    }
}

interface Window {
    __INITIAL_STATE__: object;
}
