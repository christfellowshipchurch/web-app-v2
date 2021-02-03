import { Box, Button, Cell, utils } from 'ui-kit';
import { CommunityList, Footer, Header, SEO } from 'components';
import { CommunitiesProvider } from 'providers';
import Styled from './Community.styles';
import { update as updateAuth, useAuth } from 'providers/AuthProvider';
import { useModalDispatch, showModal } from 'providers/ModalProvider';

const DEFAULT_CONTENT_WIDTH = utils.rem('1100px');

export default function Community() {
  const [{ authenticated }, authDispatch] = useAuth();
  const modalDispatch = useModalDispatch();

  function handleOnClick() {
    if (!authenticated) {
      modalDispatch(showModal('Auth'));
      authDispatch(
        updateAuth({ onSuccess: () => modalDispatch(showModal('GroupFilter')) })
      );
    } else {
      modalDispatch(showModal('GroupFilter'));
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
            <Button variant="link">Find your community</Button>
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
