import AddToCalendar from './AddToCalendar';

export default {
  component: AddToCalendar,
  tags: ['autodocs'],
  argTypes: {
    event: {
      name: 'Event',
      control: 'object',
    },
    alternateDescription: {
      name: 'Alternate Description',
      control: 'text',
    },
    label: {
      name: 'Label',
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    event: {
      title: 'Christ Fellowship Church Event',
      description: 'Come join us for an event at Christ Fellowship!',
      address: '1234 Street',
      startTime: '2023-10-31T12:00:00-04:00',
      endTime: '2023-10-31T13:00:00-04:00',
    },
    alternateDescription: 'Join us for an event at Christ Fellowship!',
    label: true,
  },
};
