import React from 'react';
import PropTypes from 'prop-types';
import { find, includes, replace, startCase, camelCase } from 'lodash';

import {
  CollectionPreview,
  FAQ,
  Layout,
  LocationBlockFeature,
  LocationBlockFeatureEspanol,
  NotFound,
  InfoCardList,
  Testimonials,
  HeroListFeature,
  Video,
} from 'components';
import { Box, Button, Divider, Loader, ContentBlock } from 'ui-kit';

import CampusInfo from './CampusInfo';
import LocationHeader from './LocationHeader';
import defaultBlockData from '../LocationBlockFeature/defaultBlockData';
import { defaultBlockDataEspanol } from '../LocationBlockFeatureEspanol/defaultBlockDataEspanol';

import {
  additionalInfoCampusData,
  headerData,
  setReminderVideos,
  setReminderData,
  setReminderEspanolData,
  thisWeekFeatureId,
  whatToExpectVideos,
  whatToExpectData,
  whatToExpectDataSpanish,
} from '../../lib/locationData';
import { CampusProvider, FeatureProvider } from 'providers';
import faqData, { otherData } from 'components/FAQ/faqData';
import { showModal, useModalDispatch } from 'providers/ModalProvider';

function LocationSingle(props = {}) {
  const modalDispatch = useModalDispatch();

  /**
   * note : Espanol Campuses Names
   */
  const CFEPBG = 'Iglesia Palm Beach Gardens';
  const CFERPB = 'Iglesia Royal Palm Beach';

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

  const { title, routing } = props?.data;

  // note : Gets Campus Name from pathname
  let campus = startCase(routing?.pathname.substring(10));

  // note : Fixes campus name for Port St. Lucie
  if (includes(campus, 'St ')) {
    campus = replace(campus, 'St ', 'St. ');
  }

  // note : We need to override the campus name to for CFE to properly format it for querying purposes
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

  let element;
  if (typeof document !== 'undefined') {
    element = document.getElementById('FAQ');
  }

  function faqScroll() {
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const setAReminderVideo = setReminderVideos[camelCase(campus)];
  const whatToExpectVideo = whatToExpectVideos[camelCase(campus)];
  const expectData = whatToExpectData(campus);
  const expectSpanishData = whatToExpectDataSpanish();

  const expectActions = [
    {
      title:
        campus === CFEPBG || campus === CFERPB
          ? 'Recuérdame'
          : 'Set a Reminder',
      variant: 'secondary',
      onClick: () =>
        modalDispatch(showModal('SetReminder', { defaultCampus: campus })),
      relatedNode: {
        url: '#set-reminder',
      },
    },
  ];

  return (
    <Layout
      contentMaxWidth={'100vw'}
      contentHorizontalPadding={'0'}
      contentVerticalPadding={'0'}
      transparentHeader
    >
      {/* Header Section */}
      <LocationHeader
        title={props?.data?.title}
        subtitle={props?.data?.summary}
        {...headerContent}
      />

      {/* Service Times and Campus Pastors sections */}
      <CampusProvider
        Component={CampusInfo}
        options={{
          variables: {
            campusName:
              campus === 'Cf Everywhere'
                ? 'Online (CF Everywhere)'
                : campus === CFEPBG
                ? 'Christ Fellowship Español Palm Beach Gardens'
                : campus === CFERPB
                ? 'Christ Fellowship Español Royal Palm Beach'
                : campus,
          },
        }}
        additionalInfo={campusAdditionalInfo?.info}
      />

      <Box px="base" bg="white" display={{ _: 'block', md: 'none' }}>
        <Divider bg="secondarySubdued" />
      </Box>

      {/* This Week Feature */}
      {campus === 'Cf Everywhere' && (
        <Box maxWidth={1100} mx="auto" width="100%" px="base" py="xl">
          <Box
            as="h2"
            color="secondary"
            width="100%"
            textAlign="center"
            mb="base"
          >
            This Week
          </Box>
          <FeatureProvider
            Component={HeroListFeature}
            options={{ variables: { id: thisWeekFeatureId } }}
          />
        </Box>
      )}

      {/* Set a Reminder */}
      {campus !== 'Cf Everywhere' && (
        <>
          <Box
            maxWidth={{ _: 350, md: 600, lg: 800 }}
            boxShadow="l"
            borderRadius="xl"
            overflow="hidden"
            mt="xxl"
            mx="auto"
          >
            <Video wistiaId={setAReminderVideo} />
          </Box>
          <Box width="100%" px={{ _: 'base', md: 'xl' }} pt="base">
            <InfoCardList
              {...(campus === CFEPBG || campus === CFERPB
                ? setReminderEspanolData
                : setReminderData)}
              button={{
                title:
                  campus === CFEPBG || campus === CFERPB
                    ? 'Recuérdame'
                    : 'Set a Reminder',
                onClick: () =>
                  modalDispatch(
                    showModal('SetReminder', { defaultCampus: campus })
                  ),
              }}
            />
          </Box>
        </>
      )}

      {/* What to Expect */}
      <Box bg="white" width="100%">
        <Box
          bg="white"
          mx="auto"
          maxWidth={{ _: 400, md: 800, lg: 1200 }}
          py="8rem"
          px={{ _: 'base', md: 'xl' }}
        >
          <ContentBlock
            {...(campus === CFEPBG || campus === CFERPB
              ? expectSpanishData
              : expectData)}
            wistiaId={whatToExpectVideo && whatToExpectVideo}
            actions={expectActions}
            contentLayout="left"
            roundVideo
            centerContent
          />
        </Box>
      </Box>

      {/* At this Location Section */}
      <Box
        width="100%"
        px={{ _: 'base', md: 'xl' }}
        pt="base"
        bg={!expectData && 'white'}
      >
        {campus === CFEPBG || campus === CFERPB ? (
          <LocationBlockFeatureEspanol
            mx="auto"
            campusName={campus}
            maxWidth={1000}
            data={defaultBlockDataEspanol(campus)}
          />
        ) : (
          <LocationBlockFeature
            mx="auto"
            campusName={campus}
            maxWidth={1000}
            data={defaultBlockData(campus)}

            /**
             * todo :  These would be the content blocks we pull in from Rock, but since the content doesn't match Figma we'll hard code the content for now.
             *  */
            // data={props?.data?.featureFeed?.features}
          />
        )}
      </Box>

      {/* What's Coming Up Section */}
      <Box bg={expectData && 'white'} py={{ _: 'l', sm: 'xl' }}>
        <Box mx="auto" maxWidth={1200}>
          <CollectionPreview
            horizontalScroll
            size="s"
            contentId={
              campus === 'Cf Everywhere'
                ? 'UniversalContentItem:04f022613f5beaca2532ef3a8e052cd6'
                : 'UniversalContentItem:ddf0d380759e8404fb6b70aa941c06f7'
            }
            buttonOverride={
              campus !== 'Cf Everywhere' ? '/events' : '/discover'
            }
          />
        </Box>
      </Box>

      {/* FAQs Section */}
      <Box id="FAQ" px="base" py="xl" width="100%" bg={!expectData && 'white'}>
        <Box mx="auto" maxWidth={1200}>
          <FAQ
            data={faqData(campus)}
            otherData={otherData(campus)}
            onClick={faqScroll}
          />
        </Box>
      </Box>

      {/* Testimonial Section */}
      <Box bg={expectData && 'white'} px="base" py="xl" width="100%">
        <Box mx="auto" maxWidth={1200}>
          <Testimonials
            testimonies={
              campus === 'Cf Everywhere'
                ? [
                    {
                      name: '<i>Amal</i>',
                      description:
                        'Christ Fellowship is a home away from home. I always feel welcomed by genuine, godly, and friendly people. Worship is amazing and every sermon adds value to my spiritual growth. I look forward to the service every week.',
                      region: '<i>India<i>',
                    },
                    {
                      name: '<i>Jim & Tammy</i>',
                      description:
                        'We attended CF online for 2 years prior to moving to Florida and now we are attending in person. While attending online, we were surprised by how connected and included we felt. When attending online you are not simply watching a church service from a distance, you are joining a family!',
                      region: '<i>South Florida<i>',
                    },
                    {
                      name: '<i>Tom & Margie</i>',
                      description:
                        'We live in New Jersey and were invited to attend Christ Fellowship Everywhere. We knew at once we had found our new church home. From Pastors Todd & Julie to all the other pastors/congregation, we immediately felt a part of a church community. Every Sunday, we pour our coffee and jump into a great service - all from the comfort of our home. God has truly blessed us by connecting us to CF Everywhere.',
                      region: '<i>New Jersey<i>',
                    },
                  ]
                : undefined
            }
          />
        </Box>
      </Box>

      {/* Never Miss a Thing Section */}
      <Box bg={!expectData && 'white'} px="base" py="xl">
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
