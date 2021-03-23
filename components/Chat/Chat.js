import { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Chat as StreamChat,
  ChannelHeader,
  Channel,
  MessageInputSmall,
  MessageSimple,
  MessageList,
  MessageLivestream,
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
        <Box as="p" color="alert" textAlign="center" px="l">
          Sorry, something went wrong!
          <br />
          Please refresh the page and try again if you'd like to chat during the
          livestream.
        </Box>
      </Styled.CenteredContent>
    );
  }

  const { channelId, channelType } = props.streamChatChannel;

  const channel = chatClient.channel(channelType, channelId, {
    name: props.relatedNode?.title || 'Chat',
    relatedNodeId: props.relatedNode.id,
  });

  return (
    <Box width="100%">
      <StreamChat
        client={chatClient}
        i18nInstance={Streami18n}
        theme="livestream light"
      >
        <Channel
          channel={channel}
          Message={
            channelType === 'livestream' ? MessageLivestream : MessageSimple
          }
        >
          <Window>
            <ChannelHeader
              image={props.relatedNode?.coverImage?.sources[0].uri}
              live={channelType === 'livestream'}
            />
            <MessageList />
            {authenticated && <MessageInputSmall noFiles={true} />}
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
  relatedNode: PropTypes.object,
};
