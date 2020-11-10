import { setContext } from '@apollo/client/link/context';

import { AUTH_TOKEN_KEY } from '../../config/keys';

const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists.
  let token = null;
  if (typeof window !== 'undefined') {
    token = window.localStorage.getItem(AUTH_TOKEN_KEY);
  }

  // Return the headers to the context so httpLink can read them.
  return {
    headers: {
      ...headers,
      authorization: token || '',
    },
  };
});

export default authLink;
