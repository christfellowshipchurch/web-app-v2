import { gql, useLazyQuery } from '@apollo/client';

export const GET_CURRENT_USER_ROLE_FOR_CHAT_CHANNEL = gql`
  query getCurrentUserRoleForChatChannel($channelId: ID!) {
    currentUser {
      id
      streamChatRole(id: $channelId)
    }
  }
`;

function useCurrentUserRoleForChatChannel(options = {}) {
  const [getCurrentUserRoleForChatChannel, query] = useLazyQuery(
    GET_CURRENT_USER_ROLE_FOR_CHAT_CHANNEL,
    {
      fetchPolicy: 'network-only',
      ...options,
    }
  );

  return {
    getCurrentUserRoleForChatChannel,
    streamChatRole: query?.data?.currentUser?.streamChatRole || null,
    ...query,
  };
}

export default useCurrentUserRoleForChatChannel;
