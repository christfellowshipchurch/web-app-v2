import { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { useAuth, logout } from '../providers/AuthProvider';

const useAuthQuery = (query, options) => {
  const [state, dispatch] = useAuth();
  const { token, authenticated } = state;
  const { data, error, loading, refetch } = useQuery(query, {
    skip: !authenticated,
    fetchPolicy: 'network-only',
    onError: () => {
      console.error('Authentication error: logging out...');
      dispatch(logout());
    },
    ...options,
  });

  useEffect(() => {
    if (authenticated) {
      refetch().catch(() => console.error('Authentication error'));
    }
  }, [authenticated, token, refetch]);

  return {
    data,
    loading,
    error,
    authenticated,
  };
};

export default useAuthQuery;
