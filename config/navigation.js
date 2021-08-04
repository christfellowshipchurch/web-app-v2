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
      action: '/items/112e169bd2542932ae3d392c13c1ac06',
      call: 'Give',
      icon: 'envelopeOpenDollar',
    },
  ],
  quickAction: {
    action: links.churchOnline,
    call: 'Watch Online',
  },
  startHereLinks: [
    {
      action: '/locations',
      call: 'Plan a Visit',
      icon: 'location',
    },
    {
      action: '/groups',
      call: 'Find Friends',
      icon: 'users',
    },
    {
      action: 'https://rock.gocf.org/contactus',
      call: 'Ask a Question',
      icon: 'info',
      target: '_blank',
    },
  ],
};

// if (flags.GROUP_FINDER) {
//   navigation.menuLinks.push({
//     action: '/community',
//     call: 'Community',
//   });
// }

export default navigation;
