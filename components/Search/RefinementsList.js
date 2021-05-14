import { Configure, Panel, RefinementList } from 'react-instantsearch-dom';
import Styled from './Search.styles';

export default function RefinementsList({ categories, filtering }) {
  return (
    <Styled.RefinementsBackground
      display={categories.length ? 'block' : 'none'}
      filtering={filtering}
    >
      <Styled.Refinements filtering={filtering}>
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
      </Styled.Refinements>
    </Styled.RefinementsBackground>
  );
}
