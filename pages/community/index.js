import { useEffect } from 'react';
import { useRouter } from 'next/router';

import flags from 'config/flags';
import { Box, Button, Cell, Icon, utils } from 'ui-kit';
import {
  CommunityActionSection,
  CommunityLeaderActions,
  CommunityList,
  Footer,
  Header,
  SEO,
} from 'components';
import { CommunitiesProvider } from 'providers';
import { update as updateAuth, useAuth } from 'providers/AuthProvider';
import { useModalDispatch, showModal } from 'providers/ModalProvider';
import {
  useGroupFiltersDispatch,
  update,
} from 'providers/GroupFiltersProvider';
import { useCurrentUser } from 'hooks';

import Styled from './Community.styles';

const DEFAULT_CONTENT_WIDTH = utils.rem('1100px');

export default function Community(props = {}) {
  const router = useRouter();

  useEffect(() => {
    if (!flags.GROUP_FINDER) router.push('/');
  }, [router]);

  const [{ authenticated }, authDispatch] = useAuth();
  const modalDispatch = useModalDispatch();
  const filtersDispatch = useGroupFiltersDispatch();
  const { currentUser } = useCurrentUser();

  function showGroupFilterModal() {
    filtersDispatch(update({ campuses: [currentUser?.profile?.campus?.name] }));
    modalDispatch(showModal('GroupFilter'));
  }

  function handleOnClick() {
    router.push('/community/search');
  }

  if (!flags.GROUP_FINDER) return null;

  return (
    <>
      <SEO title="Community" />
      <Box display="grid" gridTemplateRows="auto 1fr auto" height="100vh">
        <Header />
        <Styled.Hero>
          <Icon name="brand" size="96" color="primary" mb="base" />
          <Styled.Title>Life is Better Together</Styled.Title>
        </Styled.Hero>
        <Box>
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
