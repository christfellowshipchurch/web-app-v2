import Longform from './Longform';

export default {
  component: Longform,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: { width: '160px', height: '160px', bg: 'primary' },
};
