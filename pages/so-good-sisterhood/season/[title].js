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
import { capitalize, includes, startCase, words } from 'lodash';

const CARDS_LOADING = 6;

function extractSeasonNameAndTitle(routerTitle) {
  let seasonName;
  let seasonTitle;

  // If the Season name starts with "season", we will want to format it with season number and name. If else we will just capitalize the title.
  if (includes(routerTitle, 'season')) {
    seasonName = capitalize(words(routerTitle).slice(0, 2).join(' '));
    seasonTitle = `${seasonName} | ${startCase(
      words(routerTitle).slice(2).join(' ')
    )}`;
  } else {
    seasonName = startCase(routerTitle);
    seasonTitle = startCase(routerTitle);
  }
  return { seasonName, seasonTitle };
}

export default function SisterhoodPodcastSeason() {
  const { push, query } = useRouter();
  const analytics = useAnalytics();

  const { seasonName, seasonTitle } = extractSeasonNameAndTitle(query?.title);

  const { contentItems, loading } = useSisterhoodPodcast({
    variables: { seasonName: seasonName },
    fetchPolicy: 'cache-and-network',
  });

  //Segment Page Tracking
  useEffect(() => {
    analytics.page({
      title: `View All "${seasonTitle}" Category`,
      mediaType: 'Information',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title={seasonTitle}>
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
            {seasonTitle}
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
