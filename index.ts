// Allows you to precompile ES6 syntax
require('@babel/register')({
    plugins: ['dynamic-import-node'],
});

// Setup global variables for server-side
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEV__ = process.env.NODE_ENV === 'development';
global.__API_BASEURL__ = process.env.API_BASEURL_FOR_SERVER;
global.__BASEPATH__ = process.env.BASEPATH;
global.__MAPBOX_ACCESS_TOKEN__ = process.env.MAPBOX_ACCESS_TOKEN;

// Run assets require hooks
require('./tools/webpack/hooks')();
// Run server
require('./src/server');
