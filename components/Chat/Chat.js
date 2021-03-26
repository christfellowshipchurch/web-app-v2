import PropTypes from 'prop-types';

import {
  Channel,
  ChannelHeader,
  Chat as StreamChat,
  MessageInputSmall,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react';

import { Streami18n } from 'lib/chat';
import { useAuth } from 'providers/AuthProvider';
import { ConnectionStatus, useChat } from 'providers/ChatProvider';
import { useModalDispatch, showModal } from 'providers/ModalProvider';

import { Box, Button, Loader } from 'ui-kit';

import { MessageLivestream, MessageSimple } from './CustomChatMessage';
import Styled from './Chat.styles';

// Shortcuts
const { CONNECTING, DISCONNECTED, ERROR } = ConnectionStatus;

export default function Chat(props = {}) {
  const [chatClient, connectionStatus] = useChat();
  const [{ authenticated }] = useAuth();
  const modalDispatch = useModalDispatch();

  const connecting = connectionStatus === CONNECTING;
  const disconnected = connectionStatus === DISCONNECTED;
  const loading = connecting || disconnected;
  const error = !props.streamChatChannel || connectionStatus === ERROR;

  if (loading) {
    return (
      <Styled.CenteredContent>
        <Loader
          alignSelf="center"
          alignContent="center"
          text="Connecting chat"
        />
      </Styled.CenteredContent>
    );
  }

  if (error) {
    return (
      <Styled.CenteredContent>
        <Box as="p" color="alert" textAlign="center" px="base">
          Sorry, something went wrong!
        </Box>
        <Box as="p" color="alert" textAlign="center" px="base">
          If you'd like to chat during the livestream, please refresh the page
          to try again.
        </Box>
      </Styled.CenteredContent>
    );
  }

  const { channelId, channelType } = props.streamChatChannel;

  const channel = chatClient.channel(channelType, channelId, {
    name: props.relatedNode?.title || 'Chat',
    relatedNodeId: props.relatedNode.id,
  });

  const handleLoginClick = event => {
    event.preventDefault();
    modalDispatch(showModal('Auth'));
  };

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
            {!authenticated && (
              <Styled.CenteredContent p="base">
                <Button variant="secondary" onClick={handleLoginClick}>
                  Sign in to chat
                </Button>
              </Styled.CenteredContent>
            )}
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
