export default {
    server: {
        host: process.env.NODE_HOST || 'localhost', // Define your host from 'package.json'
        port: process.env.PORT || 8080,
    },
    api: {
        host: process.env.NODE_API_HOST || 'localhost', // Define your host from 'package.json'
        port: process.env.API_PORT || 8090,
    },
    app: {
        htmlAttributes: { lang: 'en' },
        title: 'React Cool Starter',
        titleTemplate: 'React Cool Starter - %s',
        meta: [
            {
                name: 'description',
                content:
                    'The best react universal starter boilerplate in the world.',
            },
        ],
    },
};
