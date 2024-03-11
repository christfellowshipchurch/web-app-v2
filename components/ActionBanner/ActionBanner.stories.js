import ActionBanner from './ActionBanner';

export default {
  component: ActionBanner,
  tags: ['autodocs'],
  argTypes: {
    title: {
      name: 'Title',
      control: 'text',
    },
    htmlContent: {
      name: 'HTML Content',
      control: 'text',
    },
    theme: {
      name: 'Theme Color',
      control: 'object',
    },
    actions: {
      name: 'Actions',
      control: 'object',
    },
  },
};

export const Default = {
  args: {
    title: 'Thank You',
    htmlContent: '<p>Help us build a better world.</p>',
    theme: {
      colors: {
        primary: '#133157',
        secondary: '#FFC107',
      },
    },
    actions: [
      {
        title: 'Donate',
        relatedNode: {
          url: 'https://www.google.com',
        },
      },
      {
        title: 'Learn More',
        relatedNode: {
          url: 'https://www.google.com',
        },
      },
    ],
  },
};
