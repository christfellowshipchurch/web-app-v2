import React from 'react';
import PropTypes from 'prop-types';

import {
  CollectionPreview,
  FAQ,
  Layout,
  LocationBlockFeature,
  NotFound,
  Testimonials,
} from 'components';

import { Box, ContentBlock, Loader } from 'ui-kit';
import CampusInfo from './CampusInfo';
import LocationHeader from './LocationHeader';
import defaultBlockData from '../LocationBlockFeature/defaultBlockData';

function LocationSingle(props = {}) {
  const coverImage = props?.data?.coverImage?.sources[0]?.uri;

  if (props.loading) {
    return (
      <Layout
        title="Location"
        contentMaxWidth={'100vw'}
        contentHorizontalPadding={'0'}
        contentVerticalPadding={'0'}
      >
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
      </Layout>
    );
  }

  // note : this means that there is not a valid page found on the API, so we'll render the 404 message
  if (!props.loading && !props?.data?.id) {
    return <NotFound />;
  }

  const title = props?.data?.title;
  const campus = title.substring(27, title.length - 4);

  return (
    <Layout
      title={props?.data?.title}
      contentMaxWidth={'100vw'}
      contentHorizontalPadding={'0'}
      contentVerticalPadding={'0'}
      transparentHeader
    >
      {/* Header Section */}
      <LocationHeader title={props?.data?.title} />

      {/* Service Times and Campus Pastors sections */}
      <CampusInfo campus={campus} />

      {/* At this Campus Section */}
      <Box width="100%" bg="white" p={{ _: 'base', md: 'xl' }}>
        <LocationBlockFeature
          mx="auto"
          maxWidth={1000}
          data={defaultBlockData}
          /**
           * todo :  These would be the content blocks we pull in from Rock, but since the content doesn't match Figma we'll hard code the content for now.
           *  */
          // data={drop(props?.data?.featureFeed?.features)}
        />
      </Box>

      {/* What's Coming Up Section */}
      <Box px="base" py="xl" bg="neutrals.100">
        <Box mx="auto" maxWidth={1200}>
          <CollectionPreview
            horizontalScroll
            size="s"
            contentId="UniversalContentItem:ddf0d380759e8404fb6b70aa941c06f7"
          />
        </Box>
      </Box>

      {/* FAQs Section */}
      <Box px="base" py="xl" width="100%" bg="white">
        <Box mx="auto" maxWidth={1200}>
          <FAQ />
        </Box>
      </Box>

      {/* Testimonial Section */}
      <Box px="base" py="xl" width="100%">
        <Box mx="auto" maxWidth={1200}>
          <Testimonials />
        </Box>
      </Box>

      {/* Never Miss a Thing Section */}
      <Box px="base" py="xl" bg="white">
        <Box mt={{ _: '-0.5rem', md: 'base' }} mx="auto" maxWidth={1200}>
          <ContentBlock
            title="Never miss a thing."
            subtitle="Receive events and updates straight to your inbox!"
            actions={[
              {
                title: 'Subscribe',
                relatedNode: {
                  url: 'http://eepurl.com/hAk7aP',
                },
                mt: '-0.8rem',
              },
            ]}
          />
        </Box>
      </Box>
    </Layout>
  );
}

LocationSingle.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool,
};

LocationSingle.defaultProps = {
  loading: true,
};

export default LocationSingle;
