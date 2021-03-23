import { useEffect } from 'react';

import {
  Chat as StreamChat,
  Channel,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react';

import { Streami18n } from 'chat';
import { ConnectionStatus, useChat } from 'chat/ChatProvider';
import { Box, Loader } from 'ui-kit';

// Shortcuts
const { CONNECTING, DISCONNECTED, ERROR } = ConnectionStatus;

export default function Chat(props = {}) {
  const { channelId, channelType } = props;
  const [chatClient, connectionStatus] = useChat();

  const connecting = connectionStatus === CONNECTING;
  const disconnected = connectionStatus === DISCONNECTED;
  const loading = connecting || disconnected;
  const error = !channelId || !channelType || connectionStatus === ERROR;

  useEffect(() => {
    console.log('Connection Status changed');
  }, [connectionStatus]);

  if (loading) {
    return (
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Loader />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Box as="p" color="alert" textAlign="center">
          Sorry, something went wrong!
        </Box>
      </Box>
    );
  }

  const channel = chatClient.channel(
    'livestream',
    '4a8da06088feb865617a3ccd6eafb0701d106fb4',
    {
      name: "Test Event - 24 Hour Live Stream (St. Patrick's Day 2021)",
    }
  );

  return (
    <Box width="100%">
      <StreamChat
        client={chatClient}
        i18nInstance={Streami18n}
        theme="livestream light"
      >
        <Channel channel={channel}>
          <Window>
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </StreamChat>
    </Box>
  );
}
