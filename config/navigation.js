import { links } from './metadata';

const navigation = {
  menuLinks: [
    {
      action: '/events',
      call: 'Events',
    },
    {
      action: links.serve,
      call: 'Serve',
    },
    {
      action: '/groups',
      call: 'Groups',
    },
    {
      action: '/community',
      call: 'Community',
    },
  ],
  navigationLinks: [
    {
      action: '/about',
      call: 'About',
    },
    {
      action: '/locations',
      call: 'Locations',
    },
    {
      action: '/discover',
      call: 'Discover',
    },
    {
      action: links.giveOnline,
      call: 'Give',
    },
  ],
  quickAction: {
    action: links.churchOnline,
    call: 'Watch Online',
  },
};

export default navigation;
