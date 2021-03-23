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

export default function Chat(props = {}) {
  const { channelId, channelType } = props;
  const [chatClient, connectionStatus] = useChat();

  const connecting = connectionStatus === ConnectionStatus.CONNECTING;
  const disconnected = connectionStatus === ConnectionStatus.DISCONNECTED;
  const loading = connecting || disconnected;
  const error =
    !channelId || !channelType || connectionStatus === ConnectionStatus.ERROR;

  useEffect(() => {
    console.log('Connection Status changed');
  }, [connectionStatus]);

  if (loading) {
    return <Loader />;
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
