import { format } from 'date-fns';

import { useLinkTree } from 'hooks';
import { slugify, parseLiveStreamDates } from 'utils';

import { Box, Cell, ContentBlock, Loader, utils } from 'ui-kit';
import { Layout } from 'components';

export default function Info(props = {}) {
  const { loading, data } = useLinkTree();

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        width="100%"
        minHeight="50vh"
      >
        <Loader />
      </Box>
    );
  }

  const actions = data?.linkTree;

  return (
    <Layout title="Link Tree">
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 'l', lg: 'xl' }}
      >
        <ContentBlock actions={actions} />
      </Cell>
    </Layout>
  );
}
