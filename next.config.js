module.exports = {
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
