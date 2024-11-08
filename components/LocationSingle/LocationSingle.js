import React from 'react';
import PropTypes from 'prop-types';
import { find, startCase, camelCase } from 'lodash';

import {
  CollectionPreview,
  FAQ,
  Layout,
  LocationBlockFeature,
  LocationBlockFeatureEspanol,
  InfoCardList,
  Testimonials,
  HeroListFeature,
  Video,
  SEO,
} from 'components';
import { Box, Button, Divider, Loader } from 'ui-kit';

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
  testimonials,
  thisWeekFeatureId,
  whatToExpectData,
  whatsComingUp,
} from '../../lib/locationData';
import { CampusProvider, FeatureProvider } from 'providers';
import faqData, { otherData } from 'components/FAQ/faqData';
import { showModal, useModalDispatch } from 'providers/ModalProvider';
import { campusNameFormatted } from './utils';

function LocationSingle(props = {}) {
  const modalDispatch = useModalDispatch();

  /**
   * note : Espanol Campuses Names
   */
  const CFEPBG = 'Christ Fellowship Español Palm Beach Gardens';
  const CFERPB = 'Christ Fellowship Español Royal Palm Beach';

  /**
   * note : Loading state
   **/

  if (props.loading || !props?.data) {
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

  /**
   *  note : Gets Campus Name from pathname
   */
  const { routing } = props?.data;
  const campus = campusNameFormatted(
    startCase(routing?.pathname.substring(10))
  );

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
  const expectData = whatToExpectData(campus);
  const comingUpSoon = whatsComingUp[camelCase(campus)];
  const testimonies = testimonials[camelCase(campus)];
  return (
    <>
      <SEO metadata={props?.data?.metadata} />
      <Layout
        contentMaxWidth={'100vw'}
        contentHorizontalPadding={'0'}
        contentVerticalPadding={'0'}
        transparentHeader
      >
        {/* Header Section */}
        <LocationHeader
          title={props?.data?.title}
          subtitle={
            props?.data?.summary
              ? props?.data?.summary
              : 'A church that wants to help you live the life you were created for.'
          }
          {...headerContent}
        />

        {/* Service Times and Campus Pastors sections */}
        <CampusProvider
          cfe={campus === CFEPBG || campus === CFERPB}
          Component={CampusInfo}
          options={{
            variables: {
              campusName: campusNameFormatted(campus),
            },
          }}
          additionalInfo={campusAdditionalInfo?.info}
        />

        <Box px="base" bg="white" display={{ _: 'block', md: 'none' }}>
          <Divider bg="secondarySubdued" />
        </Box>

        {/* This Week Feature */}
        {campus === 'Online (CF Everywhere)' && (
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
              //hide normal title
              dataOverride={{ title: '' }}
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
              mt={setAReminderVideo ? 'xxl' : 'xs'}
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
                  id: 'set-reminder',
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

        {/* Testimonial Section */}
        <Box bg="white" px="base" py="xl" width="100%">
          <Box mx="auto" maxWidth={1200}>
            <Testimonials
              title={
                campus === CFEPBG || campus === CFERPB
                  ? 'Mira lo que otros dicen'
                  : 'See What Others Are Saying'
              }
              testimonies={
                campus === 'Online (CF Everywhere)'
                  ? testimonials.cfEverywhere
                  : campus === CFEPBG || campus === CFERPB
                  ? testimonials.españolCampuses
                  : testimonies
              }
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
          <Box mx="auto" px={{ _: 0, md: 'base' }} maxWidth={1200}>
            <CollectionPreview
              horizontalScroll
              contentId={
                comingUpSoon
                  ? comingUpSoon
                  : 'UniversalContentItem:ddf0d380759e8404fb6b70aa941c06f7'
              }
              buttonOverride={
                campus !== 'Cf Everywhere' ? '/events' : '/discover'
              }
            />
          </Box>
        </Box>

        {/* FAQs Section */}
        <Box
          id="FAQ"
          px="base"
          py="xl"
          width="100%"
          bg={!expectData && 'white'}
        >
          <Box mx="auto" maxWidth={1200}>
            <FAQ
              data={faqData(campus)}
              alternateData={otherData(campus)}
              onClick={faqScroll}
            />
          </Box>
        </Box>

        {/* Never Miss a Thing Section */}
        <Box bg="white" px="base" py="xl">
          <Box textAlign="center" maxWidth={500} mx="auto">
            <Box as="h2" color="secondary">
              {campus !== CFEPBG && campus !== CFERPB
                ? `Never miss a thing.`
                : `No te pierdas de nada!`}
            </Box>
            <Box as="h4" color="neutrals.500">
              {campus !== CFEPBG && campus !== CFERPB
                ? `Receive events and updates straight to your inbox!`
                : `Recibe información sobre eventos y actualizaciones directamente en tu inbox.`}
            </Box>
            <Button
              as="a"
              mx="auto"
              size="s"
              px="base"
              href="https://rock.christfellowship.church/page/4344"
              target="_blank"
            >
              {campus !== CFEPBG && campus !== CFERPB
                ? `Subscribe`
                : `Suscríbete`}
            </Button>
          </Box>
        </Box>
      </Layout>
    </>
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
