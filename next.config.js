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
      { source: '/contact', destination: '/', permanent: false },
      { source: '/prayer', destination: '/', permanent: false },
      { source: '/baptism', destination: '/', permanent: false },
      { source: '/support', destination: '/', permanent: false },
      { source: '/schedule', destination: '/', permanent: false },
    ];
  },
};
