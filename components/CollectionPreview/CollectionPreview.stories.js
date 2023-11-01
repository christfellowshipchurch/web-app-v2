import CollectionPreview from './CollectionPreview';

export default {
  component: CollectionPreview,
  tags: ['autodocs'],
  argTypes: {
    hideTitle: {
      name: 'Hide Title',
      control: 'boolean',
    },
    contentId: { name: 'Content Id', control: 'text' },
    buttonOverride: { name: 'Button Override', control: 'text' },
    horizontalScroll: {
      name: 'Horizontal Scroll',
      control: 'boolean',
    },
    size: {
      options: ['s', 'l'],
      control: { type: 'radio' },
    },
    cardType: {
      options: ['default', 'horizontal'],
      control: { type: 'radio' },
    },
    hideButton: {
      name: 'Hide Button',
      control: 'boolean',
    },
    titleOverride: { name: 'Title Override', control: 'text' },
    summary: { name: 'Summary', control: 'text' },
  },
};

export const Default = {
  args: {
    hideTitle: false,
    contentId: 'UniversalContentItem:ddf0d380759e8404fb6b70aa941c06f7',
    buttonOverride: 'buttonOverride',
    horizontalScroll: false,
    size: 'l',
    cardType: 'highlight',
    hideButton: false,
    titleOverride: 'title',
    summary: 'summary',
  },
};
