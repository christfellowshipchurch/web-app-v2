import Image from './Image';

export default {
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    mask: { name: 'Mask', control: 'text' },
    source: { name: 'Source', control: 'text' },
    aspectRatio: {
      name: 'Aspect Ratio',
      control: {
        type: 'select',
        options: ['1by1', '4by3', '16by9', '21by9', '3by4'],
      },
    },
    objectFit: {
      name: 'Object Fit',
      control: {
        type: 'select',
        options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
      },
    },
    download: { name: 'Download', control: 'boolean' },
    disableRatio: { name: 'Disable Ratio', control: 'boolean' },
  },
};

export const Default = {
  args: {
    mask: '',
    source: 'https://source.unsplash.com/random/600x600',
    aspectRatio: '1by1',
    objectFit: 'cover',
  },
};
