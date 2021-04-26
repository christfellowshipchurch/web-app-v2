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
        source: '/community',
        destination: '/',
        permanent: false,
      },
      {
        source: '/community/search',
        destination: '/',
        permanent: false,
      },
    ];
  },
};
