import { useEffect, useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  Pagination,
  Panel,
} from 'react-instantsearch-dom';
import { isEqual, sum } from 'lodash';
import { useRouter } from 'next/router';
import Styled from './Search.styles';
import { Box, Button, Heading } from 'ui-kit';
import CategoriesList from './CategoriesList';
import SearchBox from './SearchBox';
import Hit from './Hit';
import RefinementsList from './RefinementsList';

const searchClient = algoliasearch(
  'KXH2MCDDBD',
  '7938b74cef1ef3dd0722fe36e418d2c7'
);

const DEBOUNCE_TIME = 1000;

const createURL = state => {
  const queryParts = [];

  if (state?.refinementList) {
    Object.keys(state.refinementList).forEach(key => {
      if (state.refinementList[key]) {
        queryParts.push(`${key}=${state.refinementList[key]}`);
      }
    });
  }

  if (state?.query) {
    queryParts.push(`q=${state.query}`);
  }

  if (state?.page) {
    queryParts.push(`p=${state.page}`);
  }

  return queryParts.length ? `?${queryParts.join('&')}` : '';
};

const searchStateToUrl = searchState => `/search${createURL(searchState)}`;

const urlToSearchState = path => {
  const searchString = path?.split('?')?.[1];
  if (!searchString) return {};

  const queryParams = new URLSearchParams(`?${searchString}`);
  let query;
  let page;
  const refinementList = {};
  queryParams.forEach((value, key) => {
    switch (key) {
      case 'q':
        query = value;
        break;
      case 'p':
        page = value;
        break;
      default:
        refinementList[key] = value?.split(',')?.filter(r => Boolean(r)) || [];
        break;
    }
  });

  return {
    query,
    page,
    refinementList,
  };
};

function Search({ filtering, setFiltering }) {
  const router = useRouter();
  const [searchState, setSearchState] = useState(
    urlToSearchState(router.asPath)
  );
  const [debouncedSetState, setDebouncedSetState] = useState(null);

  // We need to find which refinements are available when categories are selected
  // In order to hide the refinements list if there aren't any available
  // The only way to do this appears to be by using connectRefinementList
  // But that needs to be used for each refinement list
  // So we wrap a custom RefinementList component, and pass the availableRefinements state
  // to it in order to track the refinements count for each refinement list
  const [availableRefinements, setAvailableRefinements] = useState({});
  const numRefinements = sum(Object.values(availableRefinements));

  useEffect(() => {
    if (!searchState.refinementList?.category?.length && filtering) {
      setFiltering(false);
    }
  }, [searchState.refinementList?.category, filtering, setFiltering]);

  // Something is causing this function (and then multiple rerenders)
  // if a refinement is selected and then all categories are deselected
  const onSearchStateChange = updatedSearchState => {
    if (!isEqual(updatedSearchState, searchState)) {
      clearTimeout(debouncedSetState);

      const updatedUrl = searchStateToUrl(updatedSearchState);

      setDebouncedSetState(
        setTimeout(() => {
          router.replace(updatedUrl, updatedUrl, { shallow: true });
        }, DEBOUNCE_TIME)
      );

      setSearchState(updatedSearchState);
    }
  };

  const selectedCategories = searchState.refinementList?.category || [];

  return (
    <div className="ais-InstantSearch">
      <InstantSearch
        indexName="prod_ContentItem"
        searchClient={searchClient}
        searchState={searchState}
        onSearchStateChange={onSearchStateChange}
        createURL={createURL}
      >
        <div className={`search-container ${filtering ? 'filtering' : ''}`}>
          <SearchBox onSearchStateChange={onSearchStateChange} />
          <Panel header="Category" className="categories">
            <CategoriesList
              attribute="category"
              defaultRefinement={selectedCategories}
            />
          </Panel>
        </div>
        <Box
          display="flex"
          flexDirection={{ _: 'column', lg: 'row' }}
          position="relative"
        >
          {selectedCategories?.length ? (
            <RefinementsList
              filtering={filtering}
              availableRefinements={availableRefinements}
              setAvailableRefinements={setAvailableRefinements}
            />
          ) : null}
          <div className={`right-panel ${filtering ? 'filtering' : ''}`}>
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </Box>
      </InstantSearch>
      {selectedCategories?.length && numRefinements ? (
        <Styled.FilterButton>
          <Button color="primary" onClick={() => setFiltering(!filtering)}>
            <Heading fontSize="h4">{filtering ? 'Close' : 'Filter'}</Heading>
          </Button>
        </Styled.FilterButton>
      ) : null}
    </div>
  );
}

export default Search;
