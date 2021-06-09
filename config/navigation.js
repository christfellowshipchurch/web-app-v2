import { links } from './metadata';

import flags from './flags';

const navigation = {
  menuLinks: [
    {
      action: '/events',
      call: 'Events',
      icon: 'calendar',
    },
    {
      action: links.volunteer,
      call: 'Volunteer',
      icon: 'handshake',
    },
    {
      action: '/groups',
      call: 'Groups',
      icon: 'users',
    },
  ],
  navigationLinks: [
    {
      action: '/about',
      call: 'About',
      icon: 'info',
    },
    {
      action: '/locations',
      call: 'Locations',
      icon: 'map',
    },
    {
      action: '/discover',
      call: 'Discover',
      icon: 'search',
    },
    {
      action: '/give',
      call: 'Give',
      icon: 'envelopeOpenDollar',
    },
  ],
  quickAction: {
    action: links.churchOnline,
    call: 'Watch Online',
  },
};

// if (flags.GROUP_FINDER) {
//   navigation.menuLinks.push({
//     action: '/community',
//     call: 'Community',
//   });
// }

export default navigation;
