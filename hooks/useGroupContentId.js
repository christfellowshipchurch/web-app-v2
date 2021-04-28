import { useEffect, useReducer } from 'react';
import { useRouter } from 'next/router';

import { initializeApollo } from 'lib/apolloClient';
import { slugify } from 'utils';
import { useAuthState } from 'providers/AuthProvider';
import { GET_GROUPS } from './useGroups';

const initialState = {
  contentId: null,
  groups: [],
  status: 'IDLE',
};

function reducer(state, action) {
  switch (action.type) {
    case 'GROUPS_REQUESTED': {
      return {
        ...state,
        status: 'LOADING',
      };
    }
    case 'GROUPS_RECEIVED': {
      return {
        ...state,
        status: 'RECEIVED',
        groups: action.payload.groups,
      };
    }
    case 'CONTENT_ID_SET': {
      return {
        ...state,
        status: 'SUCCESS',
        contentId: action.payload.contentId,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function useGroupContentId({ title, id }) {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { authenticated } = useAuthState();
  const apolloClient = initializeApollo();

  useEffect(() => {
    // If the user isn't signed in, let's send them to /groups.
    if (!authenticated) router.push('/groups');

    async function getGroups() {
      try {
        dispatch({ type: 'GROUPS_REQUESTED' });
        const result = await apolloClient.query({ query: GET_GROUPS });
        const groups = result?.data?.currentUser?.profile?.groups;
        if (result.loading) dispatch({ type: 'GROUPS_REQUESTED' });
        if (groups && state.status !== 'RECEIVED') {
          dispatch({
            type: 'GROUPS_RECEIVED',
            payload: { groups },
          });
        }
      } catch (error) {
        console.error('useGroupContentId error: ', error);
      }
    }
    // We only want to fetch the user's groups when:
    // 1. There isn't an `id`.
    // 2. There isn't a `contentId`.
    // 3. There are no `groups`.
    // 4. We're in the `IDLE` status.
    const shouldRun =
      !id &&
      !state.contentId &&
      !state.groups.length &&
      state.status === 'IDLE';

    if (shouldRun) getGroups();
  }, [id, authenticated, router, apolloClient, state, dispatch]);

  useEffect(() => {
    if (state.contentId) return;
    const hasGroups = state.groups.length > 0;
    const shouldRun = hasGroups && title && state.status === 'RECEIVED';
    const match = state.groups.find(group => slugify(group.title) === title);

    if (shouldRun) {
      if (match) {
        dispatch({
          type: 'CONTENT_ID_SET',
          payload: {
            contentId: match.id,
          },
        });
      } else {
        router.push({
          pathname: `/groups`,
        });
      }
    }
  }, [state, dispatch, title, router]);

  return state;
}

export default useGroupContentId;
