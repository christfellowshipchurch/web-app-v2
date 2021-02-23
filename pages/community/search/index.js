import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Button, Box, Cell, Divider, Loader, utils } from 'ui-kit';
import {
  Footer,
  GroupSearchFilters,
  Header,
  SEO,
  SearchField,
  GroupsResultsList,
} from 'components';

import { useGroupFilters, update } from 'providers/GroupFiltersProvider';
import { GroupsProvider } from 'providers';
import { useSearchGroups, useForm } from 'hooks';

const DEFAULT_CONTENT_WIDTH = utils.rem('1100px');
const PAGE_SIZE = 21;

export default function CommunitySearch() {
  const [filtersState, filtersDispatch] = useGroupFilters();

  const router = useRouter();

  const [searchGroups, { loading, groups, data, fetchMore }] = useSearchGroups({
    notifyOnNetworkStatusChange: true,
  });

  // Logical shorthands
  const hasResults = groups?.length > 0;
  const showEmptyState = !loading && !hasResults;
  const hasMorePages = groups?.length < data?.searchGroups?.totalResults;

  useEffect(() => {
    if (!filtersState.hydrated) {
      return;
    }

    searchGroups({
      variables: {
        query: filtersState.queryData,
        first: PAGE_SIZE,
      },
    });
  }, [searchGroups, filtersState.hydrated, filtersState.queryData]);

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

  const { values, handleSubmit, handleChange } = useForm(() => {
    router.push({
      pathname: `/community/search`,
      query: filtersState.valuesSerialized,
    });
  });

  const handleClick = event => {
    filtersDispatch(update({ text: [values.text] }));
  };

  return (
    <>
      <SEO title="Find your Community" />
      <Box display="grid" gridTemplateRows="auto 1fr auto" height="100vh">
        <Header />
        <Cell
          width="100%"
          maxWidth={DEFAULT_CONTENT_WIDTH}
          px="base"
          py={{ _: 'l', lg: 'xl' }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="base"
          >
            <Box as="h1">Find your Community</Box>
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
            placeholder="Find a Group"
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
            <Box display="flex" justifyContent="center" my="xxl" pb="xxl">
              <Box>No Groups matched your search criteria.</Box>
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
        <Footer mt="xxl" />
      </Box>
    </>
  );
}
