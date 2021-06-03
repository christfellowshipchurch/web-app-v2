import { links } from './metadata';

import flags from './flags';

const navigation = {
  menuLinks: [
    {
      action: '/events',
      call: 'Events',
    },
    {
      action: links.volunteer,
      call: 'Volunteer',
    },
    {
      action: '/groups',
      call: 'Groups',
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
      action: '/give',
      call: 'Give',
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
