import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { Box, Cell, utils, Loader, Button } from 'ui-kit';
import {
  SearchField,
  Footer,
  Header,
  SEO,
  ContentItemsList,
  CustomLink,
} from 'components';

import { useSearchContentItems, useForm } from 'hooks';
import { ContentItemsSearchProvider } from 'providers';
const DEFAULT_CONTENT_WIDTH = utils.rem('1100px');
const PAGE_SIZE = 21;

const Discover = () => {
  const { values, handleSubmit, handleChange, reset } = useForm();

  const [
    search,
    { loading, contentItems, data, fetchMore },
  ] = useSearchContentItems({
    notifyOnNetworkStatusChange: true,
  });
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
    search({
      variables: {
        query: values.text,
        first: PAGE_SIZE,
      },
    });
  };

  function handleClearAllClick(event) {
    event.preventDefault();
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
          <SearchField
            placeholder="Search..."
            handleSubmit={handleSubmit}
            handleClick={handleClick}
            handleChange={handleChange}
            value={values.text || ''}
            mb="base"
          >
            Search
          </SearchField>

          {showEmptyState && (
            <Box my="xxl" pb="xxl" textAlign="center">
              <Box as="h2">Looks like we couldn't find any results</Box>
              <Box mb="base">
                Consider reducing the number of filters or modifing your search
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
            <ContentItemsSearchProvider
              data={contentItems}
              Component={ContentItemsList}
            />
          )}

          {loading && (
            <Box display="flex" justifyContent="center" my="xxl">
              <Loader />
            </Box>
          )}
        </Cell>
        <Footer mt="xxl" />
      </Box>
    </>
  );
};

Discover.propTypes = {
  filter: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
};

Discover.defaultProps = {
  filter: null,
  category: null,
  title: null,
};

export default Discover;
