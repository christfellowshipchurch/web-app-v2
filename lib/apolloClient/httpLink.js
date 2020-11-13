import fetch from 'cross-fetch';
import { HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_APOLLOS_API, // Server URL (must be absolute)
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  fetch,
});

export default httpLink;
