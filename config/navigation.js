import { links } from './metadata';

const navigation = {
  quickActions: [
    {
      action: '/about',
      call: 'About',
    },
    {
      action: '/next-steps',
      call: 'Next Steps',
    },
    {
      action: '/connect',
      call: 'Connect',
    },
    {
      action: '/watch',
      call: 'Watch',
    },
    {
      action: links.giveOnline,
      call: 'Give',
    },
  ],
};

export default navigation;
