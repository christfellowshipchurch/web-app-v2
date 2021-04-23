import React, { useEffect, useState } from 'react';

import { Box, Loader, Button, Cell, utils } from 'ui-kit';
import {
  SearchField,
  Layout,
  DiscoverItemsList,
  CustomLink,
  DiscoverFiltersMap,
} from 'components';

import { useSearchContentItems, useForm, useDiscoverFilters } from 'hooks';
import {
  ContentItemsSearchProvider,
  DiscoverFiltersCategoriesProvider,
} from 'providers';

const PAGE_SIZE = 21;

const Discover = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const { values, handleSubmit, handleChange, reset } = useForm();

  const { loading: loadingFilters, filters } = useDiscoverFilters();
  const [
    search,
    { loading, contentItems, data, fetchMore },
  ] = useSearchContentItems({
    notifyOnNetworkStatusChange: true,
  });

  const [filterValues, setFilterValues] = useState({
    title: filters[0]?.title,
    contentId: filters[0]?.id,
  });

  const setFilterTitle = title =>
    filterValues.title === title ? filters[0]?.title : title;

  const setFilterId = id =>
    filterValues.contentId === id ? filters[0]?.id : id;

  const hasResults = contentItems?.length > 0;
  const showEmptyState = !loading && !hasResults;
  const hasMorePages = contentItems?.length < data?.search?.totalResults;

  const handleLoadMore = () => {
    if (!loading && hasMorePages) {
      fetchMore({
        variables: {
          first: PAGE_SIZE,
          after: data?.search?.pageInfo?.endCursor,
        },
      });
    }
  };

  const handleClick = event => {
    setSearchVisible(true);
    search({
      variables: {
        query: values.text,
        first: PAGE_SIZE,
      },
    });
  };

  function handleClearAllClick(event) {
    event.preventDefault();
    setSearchVisible(false);
    reset();
  }

  useEffect(() => {
    search({
      variables: {
        query: '',
        first: PAGE_SIZE,
      },
    });
  }, [search]);

  return (
    <Layout title="Discover">
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 'l', lg: 'xl' }}
      >
        <SearchField
          handleChange={handleChange}
          handleClear={handleClearAllClick}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
          mb="base"
          placeholder="Search..."
          value={values.text || ''}
        >
          Search
        </SearchField>

        {showEmptyState && searchVisible && (
          <Box my="xxl" pb="xxl" textAlign="center">
            <Box as="h2">Looks like we couldn't find any results</Box>
            <Box mb="base">Consider modifying your search criteria.</Box>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              mt="l"
              textAlign="center"
            >
              <Button variant="secondary" onClick={handleClearAllClick} mb="s">
                Clear Search
              </Button>
            </Box>
          </Box>
        )}
        {hasResults && searchVisible && (
          <ContentItemsSearchProvider
            data={contentItems}
            Component={DiscoverItemsList}
          />
        )}

        {loading && (
          <Box display="flex" justifyContent="center" my="xxl">
            <Loader />
          </Box>
        )}
        {!loading && hasMorePages && searchVisible && (
          <Box display="flex" justifyContent="center" mt="xl">
            <Button variant="tertiary" onClick={handleLoadMore}>
              Load more
            </Button>
          </Box>
        )}

        {!loading && !searchVisible && (
          <Box>
            <Box mb="l">
              {filters?.map(filter => (
                <Button
                  key={filter.id}
                  mb="s"
                  mr="xs"
                  onClick={event => {
                    event.preventDefault();
                    setFilterValues({
                      title: setFilterTitle(filter.title),
                      contentId: setFilterId(filter.id),
                    });
                    setSearchVisible(false);
                    reset();
                  }}
                  rounded={true}
                  size="s"
                  status={
                    filterValues.title === filter.title ? 'SELECTED' : 'IDLE'
                  }
                  variant="chip"
                >
                  {filter.title}
                </Button>
              ))}
            </Box>
            <DiscoverFiltersCategoriesProvider
              options={{
                variables: {
                  id: filterValues?.contentId || filters[0]?.id,
                },
                fetchPolicy: 'cache-and-network',
              }}
              Component={DiscoverFiltersMap}
            />
          </Box>
        )}
      </Cell>
    </Layout>
  );
};

export default Discover;
