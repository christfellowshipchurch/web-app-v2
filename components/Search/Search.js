import PropTypes from 'prop-types';
import { Box } from 'ui-kit';

import Styled from './Search.styles.js';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
  Panel,
} from 'react-instantsearch-dom';
import getURLFromType from 'utils/getURLFromType.js';
import { useRouter } from 'next/router';

const searchClient = algoliasearch(
  'KXH2MCDDBD',
  '7938b74cef1ef3dd0722fe36e418d2c7'
);

function Search({ button, ...props } = {}) {
  const { label, ..._button } = button;
  return (
    <Box position="relative" {...props}>
      <Styled.Input />
      <Styled.Button {..._button}>{label}</Styled.Button>
    </Box>
  );
}

export function AlgoliaSearch() {
  return (
    <div className="ais-InstantSearch">
      <InstantSearch indexName="prod_ContentItem" searchClient={searchClient}>
        <div className="left-panel">
          <ClearRefinements />
          <Panel header="Category">
            <RefinementList attribute="category" />
          </Panel>
          <Panel header="Location">
            <RefinementList attribute="location" />
          </Panel>
          <Panel header="Ministry">
            <RefinementList attribute="ministry" />
          </Panel>
          <Panel header="Trip Type">
            <RefinementList attribute="tripType" />
          </Panel>
          <Panel header="Days Available">
            <RefinementList attribute="daysAvailable" />
          </Panel>
          <Panel header="Service Area">
            <RefinementList attribute="serviceArea" />
          </Panel>
          <Panel header="Opportunity Type">
            <RefinementList attribute="opportunityType" />
          </Panel>
          <Panel header="Related Skills">
            <RefinementList attribute="relatedSkills" />
          </Panel>
          <Panel header="Group Event">
            <RefinementList attribute="isGroupEvent" />
          </Panel>
          <Panel header="Speaker">
            <RefinementList attribute="speaker" />
          </Panel>
          <Panel header="Topics">
            <RefinementList attribute="topics" />
          </Panel>
          <Panel header="Books of the Bible">
            <RefinementList attribute="booksOfTheBible" />
          </Panel>
          <Configure hitsPerPage={8} />
        </div>
        <div className="right-panel">
          <SearchBox />
          <Hits hitComponent={Hit} />
          <Pagination />
        </div>
      </InstantSearch>
    </div>
  );
}

function Hit(props) {
  const router = useRouter();
  const url = getURLFromType(props.hit);
  return (
    <div onClick={url ? () => router.push(url) : null} style={{ cursor: url ? 'pointer' : 'default'}}>
      <img
        src={props.hit.coverImage ? props.hit.coverImage.sources[0].uri : null}
        height="100px"
        alt={props.hit.title}
      />
      <div className="hit-name">
        <Highlight attribute="title" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="summary" hit={props.hit} />
      </div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

Search.defaultProps = {
  button: {
    color: 'primary',
    label: 'Search',
    size: 's',
  },
};

Search.propTypes = {
  button: PropTypes.shape({
    color: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.string,
  }),
};

export default Search;
