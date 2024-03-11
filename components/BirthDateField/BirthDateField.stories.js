import BirthDateField from './BirthDateField';

export default {
  component: BirthDateField,
  tags: ['autodocs'],
  error: {
    name: 'Error',
    control: 'text',
  },
  onChange: {
    name: 'On Change',
    control: 'function',
  },
  required: {
    name: 'Required',
    control: 'boolean',
  },
};

export const Default = {
  args: {
    onChange: {},
    error: '',
    label: true,
  },
};
