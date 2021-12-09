import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { useGroupContentId } from 'hooks';
import { GroupProvider } from 'providers';
import { Box, Cell, Loader } from 'ui-kit';
import { GroupEmailComposer, Layout } from 'components';

function Email(props = {}) {
  const router = useRouter();
  const { title, id } = router.query;
  const state = useGroupContentId({ title, id });

  const _id = id || state.contentId;
  const isLoading = state.status === 'LOADING' || state.status === 'RECEIVED';

  return (
    // TODO: It should say the group's name here.
    // Use `title` and then deal with the hyphened title.
    <Layout title="Email Group">
      <Cell px="base" py={{ _: 'l', lg: 'xl' }} maxWidth={1300}>
        {isLoading ? (
          <Box display="flex" justifyContent="center" alignItems="center">
            <Loader text="Loading your Group" />
          </Box>
        ) : _id ? (
          <GroupProvider
            Component={GroupEmailComposer}
            options={{ variables: { itemId: _id } }}
          />
        ) : null}
      </Cell>
    </Layout>
  );
}

Email.propTypes = {
  data: PropTypes.object,
};

export default Email