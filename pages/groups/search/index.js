import { useEffect } from 'react';
import { useRouter } from 'next/router';

import flags from 'config/flags';
import { BackButton, Button, Box, Cell, Divider, Loader, utils } from 'ui-kit';
import {
  Footer,
  GroupSearchFilters,
  Header,
  SEO,
  SearchField,
  GroupsResultsList,
  CustomLink,
} from 'components';

import {
  useGroupFilters,
  update,
  resetValues,
} from 'providers/GroupFiltersProvider';
import { useModalState } from 'providers/ModalProvider';
import { GroupsProvider } from 'providers';
import { useSearchGroups, useForm, useCurrentBreakpoint } from 'hooks';

import Styled from './Search.styles';
import Sidebar from './Sidebar';

const DEFAULT_CONTENT_WIDTH = utils.rem('1100px');
const LARGE_SCREEN_CONTENT_WIDTH = utils.rem('1350px');
const PAGE_SIZE = 21;

export default function CommunitySearch() {
  const router = useRouter();
  const currentBreakpoint = useCurrentBreakpoint();

  useEffect(() => {
    if (!flags.GROUP_FINDER) router.push('/');
  }, [router]);

  const modalState = useModalState();
  const [filtersState, filtersDispatch] = useGroupFilters();
  const [searchGroups, { loading, groups, data, fetchMore }] = useSearchGroups({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
  });

  // Logical shorthands
  const hasResults = groups?.length > 0;
  const showEmptyState = !loading && !hasResults;
  const hasMorePages = groups?.length < data?.searchGroups?.totalResults;

  const { values, handleSubmit, handleChange, setValues, reset } = useForm(
    () => {
      router.push({
        pathname: `/groups/search`,
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
      pathname: `/groups/search`,
    });
    filtersDispatch(resetValues(), reset());
  }

  if (!flags.GROUP_FINDER) return null;

  const showResultsCount =
    hasResults && data?.searchGroups?.totalResults > PAGE_SIZE;

  return (
    <>
      <SEO title="Find your Community" />
      <Box display="grid" gridTemplateRows="auto 1fr auto" height="100vh">
        <Header />
        <Cell
          width="100%"
          maxWidth={
            !currentBreakpoint.isXLarge
              ? DEFAULT_CONTENT_WIDTH
              : LARGE_SCREEN_CONTENT_WIDTH
          }
          px="base"
          py={{ _: 'base', lg: 'l' }}
        >
          <CustomLink Component={BackButton} color="black" href="/groups" />

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="base"
          >
            <Box mt="base" as="h1">
              Find your Community
            </Box>
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
            handleClear={handleClearAllClick}
            handleClick={handleClick}
            handleChange={handleChange}
            value={values.text || ''}
            mb="base"
          >
            Search
          </SearchField>
          <Box
            display="flex"
            justifyContent={
              !currentBreakpoint.isXLarge ? 'space-between' : 'flex-end'
            }
            alignItems="center"
            mb="base"
          >
            {!currentBreakpoint.isXLarge && (
              <GroupSearchFilters
                loading={loading}
                visibleResults={groups?.length}
                totalResults={data?.searchGroups?.totalResults}
                pageSize={PAGE_SIZE}
              />
            )}
            <Styled.ResultsCount visible={showResultsCount}>
              {!currentBreakpoint.isSmall ? 'Showing' : ''} {groups?.length} of{' '}
              {data?.searchGroups?.totalResults} results
            </Styled.ResultsCount>
          </Box>
          <Box
            display={currentBreakpoint.isXLarge && 'grid'}
            gridTemplateColumns="250px 1fr"
            gridGap="28px"
          >
            {currentBreakpoint.isXLarge && <Sidebar />}
            {showEmptyState && (
              <Box my="xxl" pb="xxl" textAlign="center">
                <Box as="h2">Looks like we couldn't find any results</Box>
                <Box mb="base">
                  Consider reducing the number of filters or modifying your
                  search criteria.
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
            <Box>
              {hasResults && (
                <GroupsProvider data={groups} Component={GroupsResultsList} />
              )}
              <Box>
                {loading && (
                  <Box display="flex" justifyContent="center" my="xxl">
                    <Loader />
                  </Box>
                )}

                {!loading && hasMorePages && (
                  <Box display="flex" justifyContent="center" mt="xl">
                    <Button variant="secondary" onClick={handleLoadMore}>
                      Load more
                    </Button>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Cell>
        <Footer mt="xxl" />
      </Box>
    </>
  );
}
