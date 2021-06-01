import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import includes from 'lodash/includes';
import { useRouter } from 'next/router';

import { Box, Button, HorizontalHighlightCard, utils } from 'ui-kit';
import {
  CommunityActionSection,
  CommunityLeaderActions,
  Footer,
  Header,
  SEO,
} from 'components';
import { useCurrentUser } from 'hooks';
import { update as updateAuth, useAuth } from 'providers/AuthProvider';
import {
  useGroupFilters,
  update,
  updateOptions,
} from 'providers/GroupFiltersProvider';
import { useModalDispatch, showModal } from 'providers/ModalProvider';

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

  // Todo — Insert real query here!
  const showNotifyMe = true;

  // Filter subPreference lineups for current preference
  // Compares all subPreferences in Rock againist subPreferences in algolia
  const lineups = props.data?.subPreferences.filter(item =>
    includes(props.data?.facets, item.title)
  );

  // Pre-populate the Preference filter from the URL
  useEffect(() => {
    if (!filtersState.values.preferences?.includes(props.data?.title)) {
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
    router.push('/community/search');
  }

  function handleFindCommunityClick() {
    const showFilterModal = () => {
      const userCampus = currentUser?.profile?.campus?.name;
      filtersDispatch(update({ campuses: [userCampus] }));

      // Update subPreferences to match Algolia for current preference
      filtersDispatch(updateOptions({ subPreferences: props.data?.facets }));

      modalDispatch(
        showModal('GroupFilter', {
          step:
            lineups.length > 0
              ? ModalSteps.SUB_PREFERENCES
              : ModalSteps.WHERE_WHEN,
        })
      );
    };

    ensureAuthentication(showFilterModal);
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

    ensureAuthentication(showFilterModal);
  }
  return (
    <>
      <SEO title={props.data?.title} />
      <Header />
      <Styled.Hero src={props.data?.coverImage?.sources[0]?.uri}>
        <Box
          display="flex"
          flexDirection="column"
          flex="1"
          justifyContent="center"
        >
          <Box as="h1" fontSize={{ md: '95px' }}>
            {props.data?.title}
          </Box>
          <Box as="p" px={{ _: 's', sm: '80px', md: '140px', lg: '190px' }}>
            {props.data?.summary}
          </Box>
        </Box>
        <Box display="flex" mb="l">
          <Button
            variant="tertiary"
            rounded={true}
            onClick={handleFindCommunityClick}
          >
            {`Find your ${props.data?.title}`}
          </Button>
        </Box>
      </Styled.Hero>

      {showNotifyMe && (
        <Styled.NotifyMeSection>
          <Box maxWidth={{ lg: '60%' }} mr={{ lg: 'l' }}>
            <Box as="h3">Crew groups are closed for enrollment</Box>
            <Box as="p" color="subdued">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut
              imperdiet erat, sed sodales lorem.
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
              {`Notify Me`}
            </Button>
          </Box>
        </Styled.NotifyMeSection>
      )}

      {lineups.length > 0 && (
        <Box textAlign="center" alignItems="center" mb="l" px={{ md: 'xxl' }}>
          <Box as="h1" mb="0">{`The ${props.data?.title} Lineup`}</Box>
          <Box
            as="p"
            mb="base"
          >{`There's a ${props.data?.title} for everyone`}</Box>
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
      <CommunityActionSection handleOnClick={handleOnClick} />
      <CommunityLeaderActions />
      <Footer />
    </>
  );
}

CommunitySingle.propTypes = {
  data: PropTypes.object,
  slug: PropTypes.string,
};

export default CommunitySingle;
