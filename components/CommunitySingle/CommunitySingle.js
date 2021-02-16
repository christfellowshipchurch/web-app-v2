import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { SEO, CommunityActionSection } from 'components';
import { update as updateAuth, useAuth } from 'providers/AuthProvider';
import { useGroupFilters, toggleValue } from 'providers/GroupFiltersProvider';
import { useModalDispatch, showModal } from 'providers/ModalProvider';
import { Box, Button, DefaultCard, utils } from 'ui-kit';
import { transformImageUrl } from 'utils';

import Header from './CommunitySingle.styles';

const CARD_IMAGE_TRANSFORM = { w: 768 };

function CommunitySingle(props = {}) {
  const [{ authenticated }, authDispatch] = useAuth();
  const [filtersState, filtersDispatch] = useGroupFilters();
  const modalDispatch = useModalDispatch();

  useEffect(() => {
    // Pre-populate this Group Preference on the group search filters
    if (!filtersState.values.preferences?.includes(props.data?.title)) {
      filtersDispatch(
        toggleValue({ name: 'preferences', value: props.data?.title })
      );
    }
  }, [filtersState.values.preferences, filtersDispatch, props.data?.title]);

  function showGroupFilterModal() {
    // If there are subPreferences available, show that step.
    // Else skip it and go to the one after.
    const step = filtersState.options.subPreferences.length > 0 ? 1 : 2;
    modalDispatch(showModal('GroupFilter', { step }));
  }

  function handleOnClick() {
    if (!authenticated) {
      modalDispatch(showModal('Auth'));
      authDispatch(updateAuth({ onSuccess: showGroupFilterModal }));
    } else {
      showGroupFilterModal();
    }
  }

  return (
    <>
      <SEO title={props.data?.title} />
      <Header src={props.data?.coverImage?.sources[0]?.uri}>
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
          <Button variant="tertiary" rounded={true} onClick={handleOnClick}>
            {`Find your ${props.data?.title}`}
          </Button>
        </Box>
      </Header>
      <Box textAlign="center" alignItems="center" mb="l" px={{ md: 'xxl' }}>
        <Box as="h1" mb="0">{`The ${props.data?.title} Lineup`}</Box>
        <Box
          as="p"
          mb="base"
        >{`There's a ${props.data?.title} for everyone`}</Box>
        <Box display="flex" flexWrap="wrap" justifyContent="center" m="s">
          {props.data?.subPreferences &&
            props.data?.subPreferences.map((item, i) => (
              <DefaultCard
                as="a"
                key={i}
                flex={{
                  _: `0 0 calc(100% - ${utils.rem('20px')})`,
                  sm: `0 0 calc(50% - ${utils.rem('20px')})`,
                  lg: `0 0 calc(33.333% - ${utils.rem('20px')})`,
                }}
                m="s"
                coverImage={transformImageUrl(
                  item?.coverImage?.sources[0]?.uri,
                  CARD_IMAGE_TRANSFORM
                )}
                coverImageOverlay={true}
                coverImageTitle={item?.title}
                height="250px"
              />
            ))}
        </Box>
      </Box>
      <CommunityActionSection handleOnClick={handleOnClick} />
    </>
  );
}

CommunitySingle.propTypes = {
  data: PropTypes.object,
  slug: PropTypes.string,
};

export default CommunitySingle;
