module.exports = {
  images: {
    domains: [],
  },
  target: 'serverless',
  env: {
    BASE_URL: process.env.REACT_APP_BASE_URL,
  },
  experimental: {
    cpus: 1,
  },
  async headers() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        headers: [{ key: 'content-type', value: 'application/json' }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/about/meet-our-staff',
        destination: '/search?category=Staff&p=1',
        permanent: false,
      },
      {
        source: '/app-link/:slug',
        destination: '/:slug',
        permanent: false,
      },
    ];
  },
};
