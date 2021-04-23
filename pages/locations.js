import { Box, Cell, utils } from 'ui-kit';
import { Layout } from 'components';

export default function Locations() {
  return (
    <Layout title="Locations">
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 'l', lg: 'xl' }}
      >
        <Box as="h1">Locations</Box>
        <Box as="p" fontSize="l">
          This is where the page content will go&hellip;
        </Box>
      </Cell>
    </Layout>
  );
}
