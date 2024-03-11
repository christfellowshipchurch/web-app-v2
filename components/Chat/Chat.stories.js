import Chat from './Chat';

export default {
  component: Chat,
  tags: ['autodocs'],
  streamChatChannel: {
    name: 'ChatChannel',
    control: 'object',
  },
  relatedNode: {
    name: 'Related Node',
    control: 'object',
  },
};

export const Default = {
  args: {
    streamChatChannel: {
      id: '',
      channelId: '',
      channelType: '',
    },
    relatedNode: {},
  },
};
