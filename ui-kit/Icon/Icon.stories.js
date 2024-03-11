import Icon from './Icon';

export default {
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: { name: 'Name', control: 'text' },
    size: { name: 'Size', control: 'text' },
    color: { name: 'Color', control: 'text' },
    height: { name: 'Height', control: 'text' },
    width: { name: 'Width', control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    name: 'user',
    size: '32',
    color: 'red',
  },
};
