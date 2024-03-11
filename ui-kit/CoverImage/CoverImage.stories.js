import CoverImage from './CoverImage';

export default {
  component: CoverImage,
  tags: ['autodocs'],
  argTypes: {
    title: { name: 'Title', control: 'text' },
    subtitle: { name: 'Subtitle', control: 'text' },
    actions: { name: 'Actions', control: 'object' },
    src: { name: 'Source', control: 'text' },
    type: {
      name: 'Type',
      control: {
        type: 'select',
        options: ['hero-glass', 'graphic-overlay'],
      },
    },
  },
};

export const Default = {
  args: {
    title: 'Default Cover Image',
    subtitle: 'Default Cover Image Subtitle',
    actions: [
      {
        title: 'Action',
        relatedNode: {
          url: 'https://www.google.com',
        },
      },
    ],
    src: 'https://source.unsplash.com/random/800x600',
    type: 'hero-glass',
  },
};
