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
      // action: '/groups',
      action: 'https://christfellowship.church/items/42eda0fe3fbf3f200a2872df727d4440',
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

if (flags.GROUP_FINDER) {
  navigation.menuLinks.push({
    action: '/community',
    call: 'Community',
  });
}

export default navigation;
