require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080,
  apiHost: process.env.APIHOST || 'http://localhost:8000/',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Sporta',
    description: 'All the modern best practices in one example.',
    head: {
      titleTemplate: 'Sporta | %s',
      meta: [
        { name: 'description', content: 'SPORTA: Centralized platform to connect leagues, teams, and players' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: '' },
        { property: 'og:image', content: '' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: '' },
        { property: 'og:description', content: '' },
        { property: 'og:card', content: 'summary' },
        { property: 'og:site', content: '@enzoames' },
        { property: 'og:creator', content: '@enzoames' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' }
      ]
    }
  },

}, environment);
