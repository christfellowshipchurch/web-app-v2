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
  startNowLinks: [
    {
      action: '/locations',
      call: 'Find a Location',
      icon: 'location',
    },
    {
      action: '/discover-whats-here',
      call: "Discover What's Here",
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
