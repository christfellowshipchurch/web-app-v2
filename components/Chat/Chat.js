import { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Chat as StreamChat,
  Channel,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react';

import { useAuth } from 'providers/AuthProvider';
import { Streami18n } from 'chat';
import { ConnectionStatus, useChat } from 'chat/ChatProvider';
import { Box, Loader } from 'ui-kit';

import Styled from './Chat.styles';

// Shortcuts
const { CONNECTING, DISCONNECTED, ERROR } = ConnectionStatus;

export default function Chat(props = {}) {
  const [chatClient, connectionStatus] = useChat();
  const [{ authenticated }] = useAuth();

  const connecting = connectionStatus === CONNECTING;
  const disconnected = connectionStatus === DISCONNECTED;
  const loading = connecting || disconnected;
  const error = !props.streamChatChannel || connectionStatus === ERROR;

  useEffect(() => {
    console.log('Connection Status changed');
  }, [connectionStatus]);

  if (loading) {
    return (
      <Styled.CenteredContent>
        <Loader />
      </Styled.CenteredContent>
    );
  }

  if (error) {
    return (
      <Styled.CenteredContent>
        <Box as="p" color="alert" textAlign="center">
          Sorry, something went wrong!
        </Box>
      </Styled.CenteredContent>
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
            {authenticated && <MessageInput />}
          </Window>
          <Thread />
        </Channel>
      </StreamChat>
    </Box>
  );
}

Chat.propTypes = {
  streamChatChannel: PropTypes.shape({
    id: PropTypes.string,
    channelId: PropTypes.string.isRequired,
    channelType: PropTypes.string.isRequired,
  }),
};
