module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['cloudfront.christfellowship.church'],
  },
  target: 'serverless',
  async redirects() {
    return [
      {
        source: '/articles',
        destination: '/discover',
        permanent: true,
      },
      {
        source: '/messages',
        destination: '/discover',
        permanent: true,
      },
      {
        source: '/group/:title/manage',
        destination: '/group/:title/edit',
        permanent: true,
      },
      {
        source: '/kingdom-builders-page',
        destination: '/kingdom-builders',
        permanent: true,
      },
      {
        source: '/group',
        destination: '/groups',
        permanent: true,
      },
      {
        source: '/community/:title',
        destination: '/groups/:title',
        permanent: true,
      },
      {
        source: '/items/42eda0fe3fbf3f200a2872df727d4440',
        destination: '/groups',
        permanent: true,
      },
      {
        source: '/baptism',
        destination: '/articles/baptism-faqs',
        permanent: true,
      },
      {
        source: '/articles/boca-raton-heart-for-the-house',
        destination: '/locations/boca-raton',
        permanent: true,
      },
      {
        source: '/info',
        destination: '/link-tree/info',
        permanent: true,
      },
      {
        source: '/sisterhood-night',
        destination: '/link-tree/sisterhood-night',
        permanent: true,
      },
      {
        source:
          '/content/how-to-lead-communion-in-your-home-3cbe3357238650b7bbf3011f2356fb57',
        destination: '/articles/how-to-lead-communion-in-your-home',
        permanent: true,
      },
      {
        source:
          '/items/how-to-lead-communion-in-your-home-3cbe3357238650b7bbf3011f2356fb57',
        destination: '/articles/how-to-lead-communion-in-your-home',
        permanent: true,
      },
      {
        source: '/devotionals/dont-let-anyone-despise-you',
        destination: '/devotionals/dont-let-anyone-look-down-on-you',
        permanent: true,
      },
      {
        source: '/locations/trinity-church',
        destination: '/trinity-church',
        permanent: true,
      },
      // TODO: Uncomment these lines to hide Group Finder.
      // NOTE: We can't get `config/flags` in this file.
      // {
      //   source: '/community',
      //   destination: '/',
      //   permanent: false,
      // },
      // {
      //   source: '/community/search',
      //   destination: '/',
      //   permanent: false,
      // },
    ];
  },
};
