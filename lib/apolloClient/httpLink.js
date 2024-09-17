import fetch from 'cross-fetch';
import { HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri:
    process.env.NEXT_PUBLIC_APOLLOS_API || 'https://longhollow-cdn.global.ssl.fastly.net', // Server URL (must be absolute)
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  fetch: (url, options) => {
    // Strip excess whitespace to help mitigate query length issue
    const compressedUrl = url.replace(/(%20)+/g, '%20');
    return fetch(compressedUrl, options);
  },
  useGETForQueries: true,
});

export default httpLink;
