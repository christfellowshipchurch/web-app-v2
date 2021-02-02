import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { rem } from 'ui-kit/_utils';
import { Box, Button, DefaultCard } from 'ui-kit';
import { SEO } from 'components';
import { update as updateAuth, useAuth } from 'providers/AuthProvider';
import { useGroupFilters, toggleValue } from 'providers/GroupFiltersProvider';
import { useModalDispatch, showModal } from 'providers/ModalProvider';

import Header from './CommunitySingle.styles';

function CommunitySingle(props = {}) {
  const [{ authenticated }, authDispatch] = useAuth();
  const [filtersState, filtersDispatch] = useGroupFilters();
  const modalDispatch = useModalDispatch();

  useEffect(() => {
    // Pre-populate this Group Preference on the group search filters
    if (!filtersState.values.preferences?.includes(props.slug)) {
      filtersDispatch(toggleValue({ name: 'preferences', value: props.slug }));
    }
  }, [filtersState.values.preferences, filtersDispatch, props.slug]);

  function handleOnClick() {
    if (!authenticated) {
      modalDispatch(showModal('Auth'));
      authDispatch(
        updateAuth({ onSuccess: () => modalDispatch(showModal('GroupFilter')) })
      );
    } else {
      modalDispatch(showModal('GroupFilter'));
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
          <Button variant="link">{`Explore ${props.data?.title}`}</Button>
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
                  _: `0 0 calc(50% - ${rem('20px')})`,
                  md: `0 0 calc(33.333% - ${rem('20px')})`,
                }}
                m="s"
                coverImage={item?.coverImage?.sources[0]?.uri}
                coverImageOverlay={true}
                coverImageTitle={item?.title}
                height="250px"
              />
            ))}
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        p="l"
        mb="l"
      >
        <Box as="h2" mb="s">
          We’ll help you get connected.
        </Box>
        <Box as="p" mb="l">
          There are hundreds of communities at CF. We’ll help find yours.
        </Box>
        <Button rounded={true} onClick={handleOnClick}>
          Find your community
        </Button>
      </Box>
    </>
  );
}

CommunitySingle.propTypes = {
  data: PropTypes.object,
  slug: PropTypes.string,
};

export default CommunitySingle;
