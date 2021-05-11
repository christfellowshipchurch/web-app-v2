import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

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
import { useGroupFilters, update } from 'providers/GroupFiltersProvider';
import { useModalDispatch, showModal } from 'providers/ModalProvider';

import Hero from './CommunitySingle.styles';

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

  function handleFindCommunityClick() {
    const showFilterModal = () => {
      const userCampus = currentUser?.profile?.campus?.name;
      filtersDispatch(update({ campuses: [userCampus] }));
      modalDispatch(
        showModal('GroupFilter', {
          step:
            filtersState.options.subPreferences.length > 0
              ? ModalSteps.SUB_PREFERENCES
              : ModalSteps.WHERE_WHEN,
        })
      );
    };

    ensureAuthentication(showFilterModal);
  }

  function handleNotifyMeClick() {
    const showNotifyMeModal = () => {
      const userCampus = currentUser?.profile?.campus?.name;
      console.log('userCampus: ', userCampus);
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
      <Hero src={props.data?.coverImage?.sources[0]?.uri}>
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
          <Button
            variant="tertiary"
            rounded={true}
            ml="base"
            onClick={handleNotifyMeClick}
          >
            {`Notify Me`}
          </Button>
        </Box>
      </Hero>
      <Box textAlign="center" alignItems="center" mb="l" px={{ md: 'xxl' }}>
        <Box as="h1" mb="0">{`The ${props.data?.title} Lineup`}</Box>
        <Box
          as="p"
          mb="base"
        >{`There's a ${props.data?.title} for everyone`}</Box>
        <Box display="flex" flexWrap="wrap" justifyContent="center" m="s">
          {props.data?.subPreferences &&
            props.data?.subPreferences.map((item, i) => (
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
      <CommunityActionSection handleOnClick={handleFindCommunityClick} />
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
