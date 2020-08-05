export default {
    server: {
        host: process.env.NODE_HOST || 'localhost', // Define your host from 'package.json'
        port: process.env.PORT || 8080,
    },
    app: {
        htmlAttributes: { lang: 'en' },
        title: 'National Black Worker Center Project Action Map',
        titleTemplate: 'National Black Worker Center Project Action Map',
        meta: [
            {
                name: 'description',
                content: 'Find actions and stories to experience on the map.',
            },
        ],
    },
};
