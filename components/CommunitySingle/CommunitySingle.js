import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import includes from 'lodash/includes';
import { useRouter } from 'next/router';

import {
  BackButton,
  Box,
  Button,
  HorizontalHighlightCard,
  Icon,
  utils,
} from 'ui-kit';
import {
  CommunityActionSection,
  CommunityLeaderActions,
  CustomLink,
  Footer,
  Header,
  SEO,
} from 'components';
import { useCurrentUser, useNotifyMeBanner, useGroupFacetFilters } from 'hooks';

import { htmlToReactParser } from 'utils';
import { update as updateAuth, useAuth } from 'providers/AuthProvider';
import {
  useGroupFilters,
  update,
  resetValues,
} from 'providers/GroupFiltersProvider';
import { useModalDispatch, showModal } from 'providers/ModalProvider';

import VideoPlayButton from './VideoPlayButton';
import Styled from './CommunitySingle.styles';

// Redundant (and brittle) mapping, but easier to read than integers
const ModalSteps = Object.freeze({
  SUB_PREFERENCES: 1,
  WHERE_WHEN: 2,
});

function CommunitySingle(props = {}) {
  const [{ authenticated }, authDispatch] = useAuth();
  const [filtersState, filtersDispatch] = useGroupFilters();
  const modalDispatch = useModalDispatch();
  const { currentUser } = useCurrentUser();
  const router = useRouter();

  const options = {
    variables: {
      facet: 'subPreference',
      facetFilters: [`preference:${props.data?.title}`],
    },
  };

  const { facets } = useGroupFacetFilters(options);

  // Grabs NotifyMeBanner if exists for hub.
  const { notifyMeBanner } = useNotifyMeBanner({
    variables: {
      preferenceId: props?.data?.id,
    },
    fetchPolicy: 'network-only',
  });
  const showNotifyMe = notifyMeBanner;

  // Filter subPreference lineups for current preference
  // Compares all subPreferences in Rock againist subPreferences in algolia
  const lineups = props.data?.subPreferences.filter(item =>
    includes(facets, item.title)
  );

  // Pre-populate the Preference filter from the URL
  useEffect(() => {
    if (!filtersState.values.preferences?.includes(props.data?.title)) {
      filtersDispatch(resetValues());
      filtersDispatch(update({ preferences: [props.data?.title] }));
    }
  }, [filtersState.values.preferences, filtersDispatch, props.data?.title]);

  function ensureAuthentication(onSuccess) {
    if (!authenticated) {
      modalDispatch(showModal('Auth'));
      authDispatch(updateAuth({ onSuccess }));
    } else {
      onSuccess();
    }
  }

  function handleOnClick() {
    router.push({
      pathname: `/groups/search`,
      query: filtersState.valuesSerialized,
    });
  }

  function handleNotifyMeClick() {
    const showNotifyMeModal = () => {
      const userCampus = currentUser?.profile?.campus?.id;
      const groupPreference = props.data;

      modalDispatch(
        showModal('GroupNotifyMe', {
          step: 0,
          initialCampusId: userCampus,
          groupPreference,
        })
      );
    };
    ensureAuthentication(showNotifyMeModal);
  }

  function handleSubPreferenceSelect(subPreference) {
    const showFilterModal = () => {
      filtersDispatch(update({ subPreferences: [subPreference.title] }));
      modalDispatch(showModal('GroupFilter', { step: ModalSteps.WHERE_WHEN }));
    };

    showFilterModal();
  }

  return (
    <>
      <SEO title={props.data?.title} />
      <Header />
      <Box width="100%" px="xxs" py={{ _: 's', lg: 'base' }}>
        <Styled.BackButton>
          <CustomLink
            Component={BackButton}
            color={{ _: 'white', lg: 'black' }}
            href="/groups"
          />
        </Styled.BackButton>

        <Box mt={'-2.5rem'}>
          <Styled.Hero
            mt={'-1.5rem'}
            src={props.data?.coverImage?.sources[0]?.uri}
          >
            <Box
              display="flex"
              flexDirection="column"
              flex="1"
              justifyContent="center"
            >
              <Box as="h1" fontSize={{ md: '95px' }}>
                {props.data?.title}
              </Box>
              <Box
                as="p"
                px={{ _: 's', sm: '80px', md: '140px', lg: '190px' }}
                mb="s"
              >
                {props.data?.summary}
              </Box>
            </Box>
            <Box display="flex" mb={{ _: 's', lg: 'l' }}>
              <VideoPlayButton
                poster={props.data?.coverImage?.sources[0]?.uri}
                title={props.data?.title}
              />
            </Box>
          </Styled.Hero>
        </Box>

        {showNotifyMe && (
          <Styled.NotifyMeSection>
            <Box maxWidth={{ lg: '60%' }} mr={{ lg: 'l' }}>
              <Box as="h3">{notifyMeBanner?.title}</Box>
              <Box color="subdued">
                {htmlToReactParser.parse(notifyMeBanner?.htmlContent)}
              </Box>
            </Box>
            <Box
              display="flex"
              flex={1}
              flexDirection="row"
              justifyContent={{ _: 'center', lg: 'flex-end' }}
              alignItems="center"
              mt={{ _: 'base', lg: 0 }}
            >
              <Button
                variant="secondary"
                rounded={true}
                size="l"
                onClick={handleNotifyMeClick}
              >
                <Icon name="notification" mr="xs" />
                {`Notify Me`}
              </Button>
            </Box>
          </Styled.NotifyMeSection>
        )}

        {lineups.length > 0 && (
          <Box textAlign="center" alignItems="center" mb="l" px={{ md: 'xxl' }}>
            <Box
              as="h1"
              mb="0"
            >{`Types of Groups for ${props.data?.title}`}</Box>
            <Box as="p" mb="base">{`There's a group for everyone!`}</Box>
            <Box display="flex" flexWrap="wrap" justifyContent="center" m="s">
              {lineups.map((item, i) => (
                <HorizontalHighlightCard
                  as="a"
                  key={i}
                  flex={{
                    _: `0 0 calc(100% - ${utils.rem('20px')})`,
                    sm: `0 0 calc(50% - ${utils.rem('20px')})`,
                    lg: `0 0 calc(33.333% - ${utils.rem('20px')})`,
                  }}
                  m="s"
                  coverImage={item?.coverImage?.sources[0]?.uri}
                  coverImageOverlay={true}
                  coverImageTitle={item?.title}
                  type="HIGHLIGHT_SMALL"
                  height="250px"
                  onClick={() => handleSubPreferenceSelect(item)}
                />
              ))}
            </Box>
          </Box>
        )}
        <CommunityActionSection
          title={props?.data?.title}
          handleOnClick={handleOnClick}
        />
        <CommunityLeaderActions />
      </Box>
      <Footer />
    </>
  );
}

CommunitySingle.propTypes = {
  data: PropTypes.object,
  slug: PropTypes.string,
};

export default CommunitySingle;
