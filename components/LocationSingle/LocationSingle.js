import React from 'react';
import PropTypes from 'prop-types';
import { find, includes } from 'lodash';

import {
  CollectionPreview,
  FAQ,
  Layout,
  LocationBlockFeature,
  NotFound,
  Testimonials,
} from 'components';

import { Box, Button, Divider, Loader } from 'ui-kit';
import CampusInfo from './CampusInfo';
import LocationHeader from './LocationHeader';
import defaultBlockData from '../LocationBlockFeature/defaultBlockData';
import { additionalInfoCampusData, headerData } from './locationData';
import { CampusProvider } from 'providers';
import faqData from 'components/FAQ/faqData';

function LocationSingle(props = {}) {
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
  let campus = title.substring(28, title.length - 4);

  // note : We need to override the cmapus name to for CFE to properly format it for querying purposes
  if (includes(campus, 'Español')) {
    const intitialString = title.substring(25, title.length - 4);
    const firstHalf = intitialString.substring(0, 10);
    const secondHalf = intitialString.substring(12, intitialString.length);
    campus = firstHalf + secondHalf;
  }

  /**
   * note : import hard coded data
   */
  const campusAdditionalInfo = find(additionalInfoCampusData, { name: campus });
  const headerContent = find(headerData, { name: campus });

  return (
    <Layout
      contentMaxWidth={'100vw'}
      contentHorizontalPadding={'0'}
      contentVerticalPadding={'0'}
      transparentHeader
    >
      {/* Header Section */}
      <LocationHeader title={props?.data?.title} {...headerContent} />

      {/* Service Times and Campus Pastors sections */}
      <CampusProvider
        Component={CampusInfo}
        options={{ variables: { campusName: campus } }}
        additionalInfo={campusAdditionalInfo?.info}
      />

      <Box px="base" bg="white" display={{ _: 'block', md: 'none' }}>
        <Divider bg="secondarySubdued" />
      </Box>

      {/* At this Campus Section */}
      <Box width="100%" px={{ _: 'base', md: 'xl' }} pt="base">
        <LocationBlockFeature
          mx="auto"
          campusName={campus}
          maxWidth={1000}
          data={defaultBlockData}
          /**
           * todo :  These would be the content blocks we pull in from Rock, but since the content doesn't match Figma we'll hard code the content for now.
           *  */
          // data={props?.data?.featureFeed?.features}
        />
      </Box>

      {/* What's Coming Up Section */}
      <Box bg="white" py={{ _: 'l', sm: 'xl' }}>
        <Box mx="auto" maxWidth={1200}>
          <CollectionPreview
            horizontalScroll
            size="s"
            contentId="UniversalContentItem:ddf0d380759e8404fb6b70aa941c06f7"
            buttonOverride="/events"
          />
        </Box>
      </Box>

      {/* FAQs Section */}
      <Box px="base" py="xl" width="100%">
        <Box mx="auto" maxWidth={1200}>
          <FAQ data={faqData(campus)} />
        </Box>
      </Box>

      {/* Testimonial Section */}
      <Box bg="white" px="base" py="xl" width="100%">
        <Box mx="auto" maxWidth={1200}>
          <Testimonials />
        </Box>
      </Box>

      {/* Never Miss a Thing Section */}
      <Box px="base" py="xl">
        <Box textAlign="center" maxWidth={500} mx="auto">
          <Box as="h2" color="secondary">
            Never miss a thing.
          </Box>
          <Box as="h4" color="neutrals.500">
            Receive events and updates straight to your inbox!
          </Box>
          <Button
            as="a"
            mx="auto"
            size="s"
            px="base"
            href="http://eepurl.com/hAk7aP"
            target="_blank"
          >
            Subscribe
          </Button>
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
