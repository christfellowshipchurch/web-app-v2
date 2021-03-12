import { MagnifyingGlass, UserCircle } from 'phosphor-react';
import { theme } from 'ui-kit';

const navigation = {
  quickActions: [
    {
      id: 'about',
      action: '/about',
      call: 'About',
    },
    {
      id: 'next-steps',
      action: '/next-steps',
      call: 'Next Steps',
    },
    {
      id: 'connect',
      action: '/connect',
      call: 'Connect',
    },
    {
      id: 'watch',
      action: '/watch',
      call: 'Watch',
    },
    {
      id: 'search',
      action: '/search',
      call: <MagnifyingGlass color={theme.colors.fg} size="22" />,
    },
    {
      id: 'user',
      action: '/user',
      call: <UserCircle color={theme.colors.fg} size="22" />,
    },
  ],
};

export default navigation;
