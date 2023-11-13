import DiscoverItemsList from './DiscoverItemsList';

export default {
  component: DiscoverItemsList,
  tags: ['autodocs'],
  argTypes: {
    data: {
      name: 'Data',
      control: 'array',
    },
    loading: {
      name: 'Loading',
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    data: [
      {
        id: '',
        title: 'Testing',
        summary: 'Description',
        coverImage: {
          sources: [
            {
              uri: '',
            },
          ],
        },
        action: '',
        relatedNode: '',
        routing: '',
      },
      {
        id: '',
        title: 'Testing',
        summary: 'Description',
        coverImage: {
          sources: [
            {
              uri: '',
            },
          ],
        },
        action: '',
        relatedNode: '',
        routing: '',
      },
      {
        id: '',
        title: 'Testing',
        summary: 'Description',
        coverImage: {
          sources: [
            {
              uri: '',
            },
          ],
        },
        action: '',
        relatedNode: '',
        routing: '',
      },
    ],
  },
};
