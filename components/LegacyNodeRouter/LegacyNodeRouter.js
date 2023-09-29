import { useEffect } from 'react';
import { useRouter } from 'next/router';
import isEmpty from 'lodash/isEmpty';

import { Layout } from 'components';
import { Box, Cell, Loader } from 'ui-kit';
import { useNodeRoute } from 'hooks';

/**
 * note : This file exists for backwards compatibility
 *
 * /content/item-name-9f59c65055fec6cd0292deb993711bf5
 * redirects to new, prettier content url
 */

function getItemId(slug) {
  if (!isEmpty(slug)) {
    const id = slug.split('-').pop();
    return `MediaContentItem:${id}`;
  }

  return null;
}

export default function LegacyNodeRouter(props) {
  const router = useRouter();
  const { title } = router.query;
  const itemId = getItemId(title);

  const { node } = useNodeRoute({
    variables: { id: itemId },
    skip: isEmpty(itemId),
  });

  useEffect(() => {
    if (!isEmpty(node?.routing?.pathname)) {
      router.push(`/${node?.routing?.pathname}`);
    } else {
      router.push(`/items/${title}`);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [node]);

  return (
    <Layout title={title}>
      <Cell>
        <Box p="xl" justifyContent="center" alignItems="center" display="flex">
          <Loader alignSelf="center" alignContent="center" />
        </Box>
      </Cell>
    </Layout>
  );
}
