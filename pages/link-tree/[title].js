import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLinkTree } from 'hooks';

import { Box, Cell, ContentBlock, Loader, ThemeMixin, utils } from 'ui-kit';
import { Layout } from 'components';
import { useAnalytics } from 'providers/AnalyticsProvider';

export default function Info(props = {}) {
  const router = useRouter();
  const analytics = useAnalytics();
  const { title } = router.query;

  useEffect(() => {
    analytics.page({ title: `LinkTree - ${title}`, mediaType: 'Information' });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const options = {
    variables: {
      pathname: title,
    },
  };
  const { loading, data } = useLinkTree(options);

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
      <ThemeMixin
        theme={
          title === 'sisterhood-night'
            ? {
                colors: {
                  primary: '#e9927c',
                },
              }
            : {
                colors: {
                  primary: '#0092bc',
                },
              }
        }
      >
        <Cell
          as="main"
          maxWidth={utils.rem('1100px')}
          px="base"
          py={{ _: 'l', lg: 'xl' }}
        >
          <ContentBlock actions={actions} />
        </Cell>
      </ThemeMixin>
    </Layout>
  );
}
