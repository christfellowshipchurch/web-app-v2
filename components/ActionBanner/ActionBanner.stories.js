import React from 'react';
import ActionBanner from './ActionBanner';

const config = {
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
    bannerColor: {
      name: 'Banner Color',
      control: 'color',
    },
    buttonColor: {
      name: 'Button Color',
      control: 'color',
    },
    actions: {
      name: 'Actions',
      control: 'object',
    },
  },
};

export const Default = () => {
  return (
    <ActionBanner
      {...{
        htmlContent: '<p>Help us build a better world.</p>',
        bannerColor: '#F5F5F5',
        buttonColor: '#F5F5F6',
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
      }}
    />
  );
};

export default config;
