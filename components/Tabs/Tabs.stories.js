import Tabs from './Tabs';

/** For the default story we used the custom components from our CBO page. But feel free to create other custom components as well! */
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
