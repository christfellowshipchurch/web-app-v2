import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import startCase from 'lodash/startCase';
import { getUrlFromRelatedNode } from 'utils';
import { useDiscoverFilterCategoriesPreview } from 'hooks';

import {
  Box,
  DefaultCard,
  CardGrid,
  Cell,
  Button,
  utils,
  Loader,
  HorizontalHighlightCard,
  Icon,
} from 'ui-kit';
import { Layout, CustomLink } from 'components';
import { useAnalytics } from 'providers/AnalyticsProvider';

export default function DiscoverFilterCategoriesPreview() {
  const { query, push } = useRouter();
  const analytics = useAnalytics();
  const type = 'UniversalContentItem';
  const contentId = type.concat(':', query?.id);

  const { categoryTitle, contentItems, loading } =
    useDiscoverFilterCategoriesPreview({
      variables: { id: contentId, first: 100 },
      fetchPolicy: 'cache-and-network',
    });

  //Segment Page Tracking
  useEffect(() => {
    analytics.page({
      title: `View All "${categoryTitle}" Category`,
      mediaType: 'Information',
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title={startCase(categoryTitle)}>
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 'l', lg: 'xl' }}
      >
        <Box
          alignItems="center"
          display="flex"
          justifyContent="space-between"
          mb="l"
        >
          <Box as="h1" mb="0">
            {categoryTitle}
          </Box>
          <Box>
            <Button
              display="flex"
              py="none"
              variant="link"
              onClick={() => push(`/discover?c=${query?.c}`)}
            >
              <Icon name="angle-left" color="primary" />
              Back
            </Button>
          </Box>
        </Box>

        <CardGrid columns="3" mb="xl">
          {loading ? (
            <Loader />
          ) : (
            contentItems.map(n => (
              <CustomLink
                Component={n?.title ? DefaultCard : HorizontalHighlightCard}
                as="a"
                boxShadow="none"
                coverImage={n?.coverImage?.sources[0]?.uri}
                description={n?.summary}
                href={getUrlFromRelatedNode(n)}
                key={n?.id}
                scaleCard={false}
                scaleCoverImage={true}
                title={n?.title}
                loading
                type="HIGHLIGHT_SMALL"
              />
            ))
          )}
        </CardGrid>
      </Cell>
    </Layout>
  );
}
