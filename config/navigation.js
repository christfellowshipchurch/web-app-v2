import { format } from 'date-fns';
import { Circle, List, MagnifyingGlass, UserCircle } from 'phosphor-react';
import { showModal } from 'providers/ModalProvider';
import { Avatar, Box, Heading, Text, theme } from 'ui-kit';

const profileAction = ({ modalDispatch, authenticated, router }) =>
  authenticated ? router.push('/profile') : modalDispatch(showModal('Auth'));

const navigation = {
  quickActions: [
    {
      id: 'about',
      action: {
        mobile: '/about',
      },
      call: 'About',
    },
    {
      id: 'next-steps',
      action: {
        mobile: '/next-steps',
      },
      call: 'Next Steps',
    },
    {
      id: 'connect',
      action: {
        mobile: '/connect',
      },
      call: 'Connect',
    },
    {
      id: 'watch',
      action: {
        mobile: '/watch',
        web: '/watch',
      },
      call: ({ liveStreams }) => {
        const isLive = liveStreams.liveStreams.find(ls => ls.isLive);
        const timeTilLive = Math.min(
          liveStreams.liveStreams.map(ls => ls.time)
        );
        if (isLive) {
          return (
            <Box display="flex" alignItems="center">
              <Heading variant="base" color="fg" mr="xs">
                Watch
              </Heading>
              <Circle weight="fill" size={8} color={theme.colors.alert} />
              <Text
                ml="xxs"
                fontSize="xs"
                lineHeight="xs"
                fontWeight="500"
                color="alert"
              >
                Live Now
              </Text>
            </Box>
          );
        } else if (timeTilLive) {
          const formattedTTL = format(timeTilLive, 'D days');
          return (
            <Box display="flex" alignItems="center">
              <Heading variant="base" color="fg" mr="xs">
                Watch
              </Heading>
              <Circle weight="fill" size={8} color={theme.colors.alert} />
              <Text
                ml="xxs"
                fontSize="xs"
                lineHeight="xs"
                fontWeight="500"
                color="alert"
              >
                Live in ${formattedTTL}
              </Text>
            </Box>
          );
        } else {
          return (
            <Box display="flex" alignItems="center">
              <Heading variant="base" color="fg" mr="xs">
                Watch
              </Heading>
              <Circle weight="fill" size={8} color="grey" />
              <Text
                ml="xxs"
                fontSize="xs"
                lineHeight="xs"
                fontWeight="500"
                color="neutrals.500"
              >
                Not Live
              </Text>
            </Box>
          );
        }
      },
    },
    {
      id: 'search',
      action: {
        mobile: '/search',
        web: '/search',
      },
      call: (
        <>
          <Box lineHeight={0.875} display={{ _: 'none', lg: 'block' }}>
            <MagnifyingGlass color={theme.colors.fg} size="20" />
          </Box>
          <Box display={{_: 'block', lg: 'none'}}>Search</Box>
        </>
      ),
    },
    {
      id: 'user',
      action: {
        mobile: profileAction,
      },
      call: ({ user }) => (
        <>
          <Box lineHeight={0.875} display={{ _: 'none', lg: 'inherit' }}>
            <Box display={{ _: 'block', lg: 'none' }}>
              {user?.src ? (
                <Avatar
                  src={user.src}
                  name={user.name}
                  height="20px"
                  width="20px"
                />
              ) : (
                <UserCircle color={theme.colors.fg} size="20" />
              )}
            </Box>
            <Box display={{ _: 'none', lg: 'block' }}>
              <List color={theme.colors.fg} size="20" />
            </Box>
          </Box>
          <Box display={{_: 'block', lg: 'none'}}>{'Profile'}</Box>
        </>
      ),
    },
  ],
};

export default navigation;
