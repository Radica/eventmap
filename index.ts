// Allows you to precompile ES6 syntax
require('@babel/register')({
    plugins: ['dynamic-import-node'],
});

// Setup global variables for server-side
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEV__ = process.env.NODE_ENV === 'development';
// TODO: Fix url for production api server.
global.__API_BASEURL__ = global.__DEV__
    ? 'http://wordpress:80'
    : 'https://api.example.com';
global.__MAPBOX_ACCESS_TOKEN__ = process.env.MAPBOX_ACCESS_TOKEN;

// Run assets require hooks
require('./tools/webpack/hooks')();
// Run server
require('./src/server');
