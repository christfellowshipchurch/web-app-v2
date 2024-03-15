import { CardGridFeature, Layout } from 'components';
import { useDiscoverFilterCategoriesPreview } from 'hooks';
import React from 'react';
import { Box, DefaultCard } from 'ui-kit';

const CardsTesting = props => {
  const testingId = 'UniversalContentItem:ddf0d380759e8404fb6b70aa941c06f7';
  let contentItems = [];
  const { contentItems: queriedContent } = useDiscoverFilterCategoriesPreview({
    variables: { id: testingId, first: 3 },
  });
  contentItems = queriedContent;

  return (
    <Layout>
      <Box>
        <Box as="h1" textAlign="center" my="l">
          Testing Cards
        </Box>
        <Box display="flex" mb="l" justifyContent="center">
          <DefaultCard
            coverImage="/groups-cover-image.jpeg"
            coverImageOverlay={true}
            coverImageTitle="Testing"
            coverImageDescription="Testing Subtitle"
            width={{ _: '90vw', md: 900 }}
          />
        </Box>
        <CardGridFeature
          data={{ cards: contentItems }}
          horizontalScroll={true}
          customCardSize="HIGHLIGHT_MEDIUM"
        />
      </Box>
    </Layout>
  );
};

export default CardsTesting;
