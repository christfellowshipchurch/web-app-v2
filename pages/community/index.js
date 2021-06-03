import { useEffect } from 'react';
import { useRouter } from 'next/router';

import flags from 'config/flags';
import { Box, Cell, Icon, utils } from 'ui-kit';
import {
  CommunityActionSection,
  CommunityLeaderActions,
  CommunityList,
  Footer,
  Header,
  SEO,
} from 'components';
import { useGroupFilters, resetValues } from 'providers/GroupFiltersProvider';
import { CommunitiesProvider } from 'providers';
import { update as updateAuth, useAuth } from 'providers/AuthProvider';
import { useModalDispatch, showModal } from 'providers/ModalProvider';

import Styled from './Community.styles';

const DEFAULT_CONTENT_WIDTH = utils.rem('1100px');

export default function Community(props = {}) {
  const router = useRouter();
  const [{ authenticated }, authDispatch] = useAuth();
  const [filtersDispatch] = useGroupFilters();
  const modalDispatch = useModalDispatch();

  function ensureAuthentication(onSuccess) {
    if (!authenticated) {
      modalDispatch(showModal('Auth'));
      authDispatch(updateAuth({ onSuccess }));
    } else {
      onSuccess();
    }
  }

  function handleMyGroups(e) {
    const navigateToConnect = () => {
      router.push('/connect');
    };

    e.preventDefault();
    ensureAuthentication(navigateToConnect);
  }

  // Reset Filter State
  useEffect(() => {
    filtersDispatch(resetValues());
  }, [filtersDispatch]);

  useEffect(() => {
    if (!flags.GROUP_FINDER) router.push('/');
  }, [router]);

  function handleOnClick() {
    router.push('/community/search');
  }

  if (!flags.GROUP_FINDER) return null;

  return (
    <>
      <SEO title="Community" />
      <Box display="grid" gridTemplateRows="auto 1fr auto" height="100vh">
        <Header />
        <Styled.Hero />
        <Box>
          <Cell
            maxWidth={DEFAULT_CONTENT_WIDTH}
            p={{ _: 'xs', md: 'base' }}
            textAlign="center"
          >
            <Styled.Title>Life is better together.</Styled.Title>
            <Styled.Summary>
              We want to help you find community, grow in your relationship with
              God, and build the kind of friendships we all need to live out our
              faith. Groups and classes help you know where to look for
              direction and have the right people encouraging you along the way.
            </Styled.Summary>
            <Box as="p" fontStyle="italic">
              Already in a group? View all of your groups{' '}
              <Box as="a" onClick={handleMyGroups} href="/connect">
                here
              </Box>
              .
            </Box>
          </Cell>
          <Cell
            maxWidth={DEFAULT_CONTENT_WIDTH}
            px="base"
            py={{ _: 'm', lg: 'l' }}
          >
            <Box as="section">
              <CommunitiesProvider Component={CommunityList} />
            </Box>
          </Cell>
        </Box>
        <CommunityActionSection handleOnClick={handleOnClick} />
        <CommunityLeaderActions />
        <Footer />
      </Box>
    </>
  );
}
