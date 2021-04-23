import { GroupsProvider } from 'providers';
import { Box, Cell, utils } from 'ui-kit';
import { GroupsList, Layout } from 'components';

export default function Groups() {
  return (
    <Layout title="Groups">
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 'l', lg: 'xl' }}
      >
        <Box as="h1" mb="l">
          Groups
        </Box>
        <GroupsProvider Component={GroupsList} />
      </Cell>
    </Layout>
  );
}
