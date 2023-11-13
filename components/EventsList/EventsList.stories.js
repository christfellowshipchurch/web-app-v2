import EventsList from './EventsList';

export default {
  component: EventsList,
  tags: ['autodocs'],
  argTypes: {
    data: {
      name: 'Data',
      control: 'array',
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
      },
    ],
  },
};
