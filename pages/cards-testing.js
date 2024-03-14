import { Layout } from 'components';
import React from 'react';
import { Box, DefaultCard } from 'ui-kit';

const CardsTesting = props => {
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
      </Box>
    </Layout>
  );
};

export default CardsTesting;
