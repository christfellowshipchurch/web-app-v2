import { useEffect, useState, useRef } from 'react';

import { StreamChatClient } from 'lib/chat';

import { useAuth } from 'providers/AuthProvider';
import {
  ConnectionStatus,
  useChatConnection,
} from 'providers/ChatConnectionProvider';

import useCurrentUserRoleForChatChannel from './useCurrentUserRoleForChatChannel';

export default function useChatChannel({ streamChatChannel, options }) {
  const [{ authenticated }] = useAuth();
  const connectionStatus = useChatConnection();
  // const channel = useRef(null);
  const [channel, setChannel] = useState(null);

  const { channelId, channelType } = streamChatChannel;
  const {
    getCurrentUserRoleForChatChannel,
    streamChatRole,
  } = useCurrentUserRoleForChatChannel({
    variables: {
      channelId,
    },
  });

  const isLivestream = channelType === 'livestream';
  const connected = connectionStatus === ConnectionStatus.CONNECTED;

  // Initialize Channel
  useEffect(() => {
    async function initializeChannel() {
      if (
        connected &&
        streamChatChannel &&
        // No channel created yet OR new channel id
        (!channel || channelId !== channel?.id)
      ) {
        // ! TODO: Eventually, creating generic N user messaging groups
        // ! will require a different function signature call for `.channel()`
        const newChannel = await StreamChatClient.channel(
          channelType,
          channelId,
          options
        );
        setChannel(newChannel);

        if (authenticated) {
          getCurrentUserRoleForChatChannel(channelId);
        }

        return () => {
          if (channel) {
            setChannel(null);
          }
        };
      }
    }

    return initializeChannel();
  }, [
    authenticated,
    channel,
    channelId,
    channelType,
    connectionStatus,
    connected,
    getCurrentUserRoleForChatChannel,
    options,
    setChannel,
    streamChatChannel,
  ]);
  console.log('channel', JSON.stringify(channel?.id, null, 2));

  return {
    channel: channel,
    userRole: streamChatRole,
  };
}
