import { useEffect } from 'react';
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

import { StreamChatClient, Streami18n } from 'lib/chat';
import { useAuth } from 'providers/AuthProvider';
import {
  ConnectionStatus,
  useChatConnection,
} from 'providers/ChatConnectionProvider';
import { useModalDispatch, showModal } from 'providers/ModalProvider';
import { useChatChannel } from 'hooks';

import { Box, Button, Loader } from 'ui-kit';

import { MessageLivestream, MessageSimple } from './CustomChatMessage';
import Styled from './Chat.styles';

// Shortcuts
const { CONNECTING, DISCONNECTED, ERROR } = ConnectionStatus;

export default function Chat(props = {}) {
  const connectionStatus = useChatConnection();
  const [{ authenticated }] = useAuth();
  const modalDispatch = useModalDispatch();

  const { channel, userRole } = useChatChannel({
    streamChatChannel: props.streamChatChannel,
    options: {
      name: props.relatedNode?.title || 'Chat',
      relatedNodeId: props.relatedNode?.id,
    },
  });

  console.log('userRole:', userRole);

  // Semantic shortcuts
  const connecting = connectionStatus === CONNECTING;
  const disconnected = connectionStatus === DISCONNECTED;
  const loading = connecting || disconnected;
  const error = !props.streamChatChannel || connectionStatus === ERROR;

  const { channelType } = props.streamChatChannel;
  const isLivestream = channelType === 'livestream';

  console.log('🧡 channel?.id:', channel?.id);
  if (loading || !channel) {
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

  const handleLoginClick = event => {
    event.preventDefault();
    modalDispatch(showModal('Auth'));
  };

  const showHeader = isLivestream;
  const messageComponent = isLivestream ? MessageLivestream : MessageSimple;
  const noFileUploads = channelType !== 'group';

  return (
    <Box width="100%" height="100%">
      <StreamChat
        client={StreamChatClient}
        i18nInstance={Streami18n}
        theme="livestream light"
      >
        <Channel channel={channel} Message={messageComponent}>
          <Window>
            {showHeader && (
              <ChannelHeader
                title={props.relatedNode?.title}
                image={props.relatedNode?.coverImage?.sources[0].uri}
                live={isLivestream}
              />
            )}

            {userRole === 'MODERATOR' && (
              <Box
                as="p"
                color="primary"
                textAlign="center"
                mb="0"
                fontSize="xs"
                fontWeight="bold"
                bg="primarySubdued"
                py="s"
              >
                You are moderating this livestream chat.
              </Box>
            )}

            <MessageList />
            {authenticated && <MessageInputSmall noFiles={noFileUploads} />}
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
