import { GroupSearch, Footer, Header, SEO } from 'components';
import { Box, Cell, utils } from 'ui-kit';

const DEFAULT_CONTENT_WIDTH = utils.rem('1100px');

export default function CommunitySearch() {
  return (
    <>
      <SEO title="Find your Community" />
      <Box display="grid" gridTemplateRows="auto 1fr auto" height="100vh">
        <Header />
        <Cell
          width={DEFAULT_CONTENT_WIDTH}
          maxWidth={DEFAULT_CONTENT_WIDTH}
          px="base"
          py={{ _: 'l', lg: 'xl' }}
        >
          <GroupSearch />
        </Cell>
        <Footer />
      </Box>
    </>
  );
}
