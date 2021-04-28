import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import {
  Box,
  Cell,
  Button,
  Divider,
  HorizontalHighlightCard,
  utils,
  Loader,
} from 'ui-kit';
import {
  CommunityActionSection,
  CommunityLeaderActions,
  Footer,
  Header,
  SEO,
  SearchField,
  GroupSearchFilters,
  CustomLink,
  GroupsResultsList,
} from 'components';
import { useCurrentUser, useSearchGroups, useForm } from 'hooks';
import { update as updateAuth, useAuth } from 'providers/AuthProvider';
import { useGroupFilters, update } from 'providers/GroupFiltersProvider';
import {
  useModalDispatch,
  showModal,
  useModalState,
} from 'providers/ModalProvider';
import { GroupsProvider } from 'providers';

import Hero from './CommunitySingle.styles';

const DEFAULT_CONTENT_WIDTH = utils.rem('1100px');
const PAGE_SIZE = 21;

// Redundant (and brittle) mapping, but easier to read than integers
const ModalSteps = Object.freeze({
  SUB_PREFERENCES: 1,
  WHERE_WHEN: 2,
});

function CommunitySingle(props = {}) {
  const router = useRouter();
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
    router.push('/community');
  }

  function handleSubPreferenceSelect(subPreference) {
    const showFilterModal = () => {
      filtersDispatch(update({ subPreferences: [subPreference.title] }));
      modalDispatch(showModal('GroupFilter', { step: ModalSteps.WHERE_WHEN }));
    };

    ensureAuthentication(showFilterModal);
  }

  const modalState = useModalState();
  const [searchGroups, { loading, groups, data, fetchMore }] = useSearchGroups({
    notifyOnNetworkStatusChange: true,
  });

  // Logical shorthands
  const hasResults = groups?.length > 0;
  const showEmptyState = !loading && !hasResults;
  const hasMorePages = groups?.length < data?.searchGroups?.totalResults;

  const { values, handleSubmit, handleChange, setValues, reset } = useForm(
    () => {
      router.push({
        pathname: `/community/search`,
        query: filtersState.valuesSerialized,
      });
    }
  );

  useEffect(() => {
    // Don't execute search if state hasn't been hydrated OR a modal is open
    if (!filtersState.hydrated || modalState.activeModal.component) {
      return;
    }

    if (filtersState.values.text.length) {
      setValues({ text: filtersState.values.text[0] });
    }

    searchGroups({
      variables: {
        query: filtersState.queryData,
        first: PAGE_SIZE,
      },
    });
  }, [
    filtersState.hydrated,
    filtersState.queryData,
    filtersState.values.text,
    modalState.activeModal.component,
    searchGroups,
    setValues,
  ]);

  const handleLoadMore = () => {
    if (!loading && hasMorePages) {
      fetchMore({
        variables: {
          first: PAGE_SIZE,
          after: data?.searchGroups?.pageInfo?.endCursor,
        },
      });
    }
  };

  const handleClick = event => {
    filtersDispatch(update({ text: [values.text] }));
  };

  function handleClearAllClick(event) {
    event.preventDefault();
    // Update search page URL
    router.push({
      pathname: `/community/search`,
    });
    filtersDispatch(resetValues(), reset());
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
        {/* <Box display="flex" mb="l">
          <Button
            variant="tertiary"
            rounded={true}
            onClick={handleFindCommunityClick}
          >
            {`Find your ${props.data?.title}`}
          </Button>
        </Box> */}
      </Hero>
      <Box textAlign="center" alignItems="center" mb="l" px={{ md: 'xxl' }}>
        <Cell width="100%" maxWidth={DEFAULT_CONTENT_WIDTH} px="base">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="base"
          >
            <Box as="h1">{`Find your ${props.data?.title} Community`}</Box>
            <Button
              as="a"
              rounded={true}
              size="s"
              variant="secondary"
              href="https://rock.gocf.org/page/2113"
              display={{ _: 'none', md: 'inline-block' }}
            >
              Need help?
            </Button>
          </Box>

          <Divider mb="l" />
          <SearchField
            placeholder="Search for groups..."
            handleSubmit={handleSubmit}
            handleClick={handleClick}
            handleChange={handleChange}
            value={values.text || ''}
            mb="base"
          >
            Search
          </SearchField>
          <GroupSearchFilters
            loading={loading}
            visibleResults={groups?.length}
            totalResults={data?.searchGroups?.totalResults}
            pageSize={PAGE_SIZE}
          />

          {showEmptyState && (
            <Box my="xxl" pb="xxl" textAlign="center">
              <Box as="h2">Looks like we couldn't find any results</Box>
              <Box mb="base">
                Consider reducing the number of filters or modifying your search
                criteria.
              </Box>
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                mt="l"
                textAlign="center"
              >
                <Button
                  variant="secondary"
                  onClick={handleClearAllClick}
                  mb="s"
                >
                  Clear Search
                </Button>
                <CustomLink href="https://rock.gocf.org/page/2113">
                  Need help?
                </CustomLink>
              </Box>
            </Box>
          )}

          {hasResults && (
            <GroupsProvider data={groups} Component={GroupsResultsList} />
          )}

          {loading && (
            <Box display="flex" justifyContent="center" my="xxl">
              <Loader />
            </Box>
          )}

          {!loading && hasMorePages && (
            <Box display="flex" justifyContent="center" mt="xl">
              <Button variant="tertiary" onClick={handleLoadMore}>
                Load more
              </Button>
            </Box>
          )}
        </Cell>
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
