import {
  Chat as StreamChat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react';

import { Streami18n } from 'chat';
import { useChat } from 'chat/ChatProvider';
import { Box } from 'ui-kit';

export default function Chat(props = {}) {
  const [chatClient, chatState] = useChat();

  console.group('💬 %c<Chat>', 'color: magenta');
  console.log('chatClient:', chatClient);
  console.log('chatState:', chatState);

  const channel = chatClient.channel(
    'livestream',
    '4a8da06088feb865617a3ccd6eafb0701d106fb4',
    {
      // add as many custom fields as you'd like
      name: "Test Event - 24 Hour Live Stream (St. Patrick's Day 2021)",
      members: ['3a4a20f0828c592f7f366dfce8d1f9ab'],
    }
  );

  console.log('channel:', channel);
  console.groupEnd();

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
