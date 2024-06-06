import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getUrlFromRelatedNode } from 'utils';
import { useSisterhoodPodcast } from 'hooks';

import {
  Box,
  DefaultCard,
  CardGrid,
  Cell,
  Button,
  utils,
  HorizontalHighlightCard,
  Icon,
} from 'ui-kit';
import { Layout, CustomLink } from 'components';
import { useAnalytics } from 'providers/AnalyticsProvider';
import { startCase } from 'lodash';

const CARDS_LOADING = 6;

export default function SisterhoodPodcastSeason() {
  const { push } = useRouter();
  const analytics = useAnalytics();
  const router = useRouter();
  const routerTitle = router.query.title;
  let seasonName;
  // Check if the season name is the season number or a whole sentence like 'Summer With Friends'
  if (!isNaN(routerTitle)) {
    seasonName = `Season ${routerTitle}`;
  } else {
    seasonName = startCase(routerTitle);
  }
  const { contentItems, loading } = useSisterhoodPodcast({
    variables: { seasonName: seasonName },
    fetchPolicy: 'cache-and-network',
  });

  //Segment Page Tracking
  useEffect(() => {
    analytics.page({
      title: `View All "${seasonName}" Category`,
      mediaType: 'Information',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title={seasonName}>
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
            {seasonName}
          </Box>
          <Box>
            <Button
              display="flex"
              py="none"
              variant="link"
              onClick={() => push(`/so-good-sisterhood`)}
            >
              <Icon name="angle-left" color="primary" />
              Back
            </Button>
          </Box>
        </Box>

        <CardGrid columns="3" mb="xl">
          {loading
            ? [...Array(CARDS_LOADING)].map(n => (
                <DefaultCard key={n} height={250} loading={true} />
              ))
            : contentItems.map(n => (
                <CustomLink
                  Component={n?.title ? DefaultCard : HorizontalHighlightCard}
                  as="a"
                  boxShadow="none"
                  coverImage={n?.coverImage?.sources[0]?.uri}
                  description={n?.summary}
                  mobileWidth="90vw"
                  href={getUrlFromRelatedNode(n)}
                  key={n?.id}
                  scaleCard={false}
                  scaleCoverImage={true}
                  title={n?.title}
                  type="HIGHLIGHT_SMALL"
                />
              ))}
        </CardGrid>
      </Cell>
    </Layout>
  );
}
