import Header from '.';

export default {
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    name: 'Type',
    control: {
      type: 'select',
      options: ['transparent', 'default '],
    },
    showMobileNav: { name: 'Show Mobile Nav', control: 'boolean' },
  },
};

export const Default = {
  args: {
    type: 'default',
    showMobileNav: false,
  },
};
