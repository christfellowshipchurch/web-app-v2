import {
  Chat as StreamChat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react';

import { useChat } from 'hooks';
import { Box } from 'ui-kit';

export default function Chat(props = {}) {
  const chatClient = useChat();

  console.log('chatClient:', chatClient);

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

  return (
    <Box width="100%">
      <StreamChat client={chatClient} theme="livestream light">
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </StreamChat>
    </Box>
  );
}
