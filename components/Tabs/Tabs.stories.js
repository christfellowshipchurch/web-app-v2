import Tabs from './Tabs';

import { CustomTab, customTabs } from 'pages/cbo/customTabs';

export default {
  component: Tabs,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    title: 'Stories of Impact',
    summary: 'HEAR HOW YOUR CHRIST BIRTHDAY OFFERING DELIVERS HOPE',
    TabComponent: CustomTab,
    tabs: customTabs,
  },
};
