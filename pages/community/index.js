import { Box, Button, Cell, utils } from 'ui-kit';
import { CommunityList, Footer, Header, SEO } from 'components';
import { GET_PREFERENCES, GET_SUB_PREFERENCES } from 'hooks/usePreferences';
import { initializeApollo } from 'lib/apolloClient';
import { CommunitiesProvider } from 'providers';
import { update as updateAuth, useAuth } from 'providers/AuthProvider';
import { useModalDispatch, showModal } from 'providers/ModalProvider';

import Styled from './Community.styles';

const DEFAULT_CONTENT_WIDTH = utils.rem('1100px');

export default function Community(props = {}) {
  const [{ authenticated }, authDispatch] = useAuth();
  const modalDispatch = useModalDispatch();
  const { preferences, subPreferences } = props;

  // console.log('📄 <Community> props:', props);

  function handleOnClick() {
    if (!authenticated) {
      modalDispatch(showModal('Auth'));
      authDispatch(
        updateAuth({
          onSuccess: () =>
            modalDispatch(
              showModal('GroupFilter', { preferences, subPreferences })
            ),
        })
      );
    } else {
      modalDispatch(showModal('GroupFilter', { preferences, subPreferences }));
    }
  }

  return (
    <>
      <SEO title="Community" />
      <Box display="grid" gridTemplateRows="auto 1fr auto" height="100vh">
        <Header />
        <Styled.Hero>
          <Styled.Title>Live. Laugh. Together.</Styled.Title>
          <Box as="p" mb="l">
            Build the kind of friendships we all need to live out our faith.
            <br />
            There’s community for everyone.
          </Box>
          <Box display="flex">
            <Button variant="tertiary" rounded={true}>
              Watch
            </Button>
            <Button onClick={handleOnClick} variant="link">
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
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          p="l"
          mb="l"
        >
          <Box as="h2" mb="s">
            We’ll help you get connected.
          </Box>
          <Box as="p" mb="l">
            There are hundreds of communities at CF. We’ll help find yours.
          </Box>
          <Button onClick={handleOnClick} rounded={true}>
            Find your community
          </Button>
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log('🛰️ getServerSideProps()');
  const apolloClient = initializeApollo();

  console.log('--> ⏳ Fetching preferences and subPreferences in parallel...');
  const [queryPreferences, querySubPreferences] = await Promise.all([
    apolloClient.query({ query: GET_PREFERENCES }),
    apolloClient.query({ query: GET_SUB_PREFERENCES }),
    // apolloClient.query({ query: GET_CAMPUSES }),
  ]);

  const preferences = queryPreferences?.data?.allPreferences || [];
  const subPreferences = querySubPreferences?.data?.allSubPreferences || [];
  console.log(
    `--> ✅ Fetched (${preferences.length}) preferences and (${subPreferences.length}) subPreferences`
  );

  return {
    props: {
      preferences: queryPreferences?.data?.allPreferences || [],
      subPreferences: querySubPreferences?.data?.allSubPreferences || [],
    },
  };
}
