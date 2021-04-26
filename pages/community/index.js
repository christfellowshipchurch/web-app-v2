import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Box, Button, Cell, utils } from 'ui-kit';
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
  // Redirect and return null until find a group launch
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, [router]);

  return null;

  const [{ authenticated }, authDispatch] = useAuth();
  const modalDispatch = useModalDispatch();
  const filtersDispatch = useGroupFiltersDispatch();
  const { currentUser } = useCurrentUser();

  function showGroupFilterModal() {
    filtersDispatch(update({ campuses: [currentUser?.profile?.campus?.name] }));
    modalDispatch(showModal('GroupFilter'));
  }

  function handleOnClick() {
    if (!authenticated) {
      modalDispatch(showModal('Auth'));
      authDispatch(
        updateAuth({
          onSuccess: showGroupFilterModal,
        })
      );
    } else {
      showGroupFilterModal();
    }
  }

  return (
    <>
      <SEO title="Community" />
      <Box display="grid" gridTemplateRows="auto 1fr auto" height="100vh">
        <Header />
        <Styled.Hero>
          <Styled.Title>Live. Laugh. Together.</Styled.Title>
          <Box as="p" mb="l" color="subdued">
            Build the kind of friendships we all need to live out our faith.
            <br />
            There’s community for everyone.
          </Box>
          <Box display="flex">
            <Button onClick={handleOnClick} rounded={true}>
              Find your community
            </Button>
          </Box>
        </Styled.Hero>
        <Box>
          <Cell
            maxWidth={DEFAULT_CONTENT_WIDTH}
            px="base"
            py={{ _: 'l', lg: 'xl' }}
          >
            <Box as="section" py={{ _: 'l', lg: 'xl' }}>
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
