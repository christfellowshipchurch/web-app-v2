import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import flags from 'config/flags';
import {
  BackButton,
  Button,
  Box,
  Cell,
  Divider,
  Loader,
  PaginationStepper,
  utils,
} from 'ui-kit';
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
  const [cursor, setCursor] = useState({
    page: 1,
    current: null,
    previous: null,
  });
  const [filtersState, filtersDispatch] = useGroupFilters();
  const [searchGroups, { loading, groups, data }] = useSearchGroups({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
  });

  // Logical shorthands
  const hasResults = groups?.length > 0;
  const totalResults = data?.searchGroups?.totalResults
    ? Math.ceil(data?.searchGroups?.totalResults / PAGE_SIZE)
    : 0;
  const showEmptyState = !loading && !hasResults;

  // Pagination Stepper shorthand
  const renderPagination = () => (
    <PaginationStepper
      total={totalResults}
      cursor={cursor.page}
      stepBy={1}
      onStepBackward={() => {
        setCursor({
          page: cursor.page - 1,
          current: cursor.page === 2 ? null : cursor.previous,
          previous: cursor.current,
        });
      }}
      onStepForward={() => {
        setCursor({
          page: cursor.page + 1,
          current: data?.searchGroups?.pageInfo?.endCursor,
          previous: cursor.current,
        });
      }}
    />
  );

  const { values, handleSubmit, handleChange, setValues, reset } = useForm(
    () => {
      router.push({
        pathname: `/groups/search`,
        query: filtersState.valuesSerialized,
      });
    }
  );

  useEffect(() => {
    // note : only run a search with the cursor if the cursor itself has been changed
    searchGroups({
      variables: {
        query: filtersState.queryData,
        first: PAGE_SIZE,
        after: cursor.current,
      },
    });
  }, [cursor]);

  useEffect(() => {
    // Don't execute search if state hasn't been hydrated OR a modal is open
    if (!filtersState.hydrated || modalState.activeModal.component) {
      return;
    }

    if (filtersState.values.text.length) {
      setValues({ text: filtersState.values.text[0] });
    }

    // note : when the filters have changed, reset the cursor in order to insure that the user will be starting this new query from page 1
    setCursor({
      page: 1,
      current: null,
      previous: null,
    });

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
    router,
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

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
              Help Me Find a Group
            </Button>
          </Box>

          <SearchField
            border="2px solid #C4C4C4"
            boxShadow="l"
            placeholder="Search for groups..."
            handleSubmit={handleSubmit}
            handleClear={handleClearAllClick}
            handleClick={handleClick}
            handleChange={handleChange}
            value={values.text || ''}
            mb="l"
          >
            Search
          </SearchField>
          <Divider mb="l" />
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
                <>
                  <Box py="base" display="flex" justifyContent="flex-end">
                    {renderPagination()}
                  </Box>

                  <GroupsProvider data={groups} Component={GroupsResultsList} />

                  <Box py="base" display="flex" justifyContent="center">
                    {renderPagination()}
                  </Box>
                </>
              )}
              <Box>
                {loading && (
                  <Box display="flex" justifyContent="center" my="xxl">
                    <Loader />
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
