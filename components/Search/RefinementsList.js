import { sum } from 'lodash';
import { Configure, Panel } from 'react-instantsearch-dom';
import { Box } from 'ui-kit';
import RefinementList from './RefinementList';
import Styled from './Search.styles';

const refinements = [
  { header: 'Location', attribute: 'location' },
  { header: 'Ministry', attribute: 'ministry' },
  { header: 'Trip Type', attribute: 'tripType' },
  { header: 'Days Available', attribute: 'daysAvailable' },
  { header: 'Service Area', attribute: 'serviceArea' },
  { header: 'Opportunity Type', attribute: 'opportunityType' },
  { header: 'Related Skills', attribute: 'relatedSkills' },
  { header: 'Group Event', attribute: 'isGroupEvent' },
  { header: 'Speaker', attribute: 'speaker' },
  { header: 'Topics', attribute: 'topics' },
  { header: 'Books of the Bible', attribute: 'booksOfTheBible' },
];

export default function RefinementsList({
  filtering,
  availableRefinements,
  setAvailableRefinements,
}) {
  const numRefinements = sum(Object.values(availableRefinements));
  return (
    <Styled.RefinementsBackground
      filtering={filtering}
      numRefinements={numRefinements}
    >
      <Styled.Refinements filtering={filtering}>
        {refinements.map(({ header, attribute }) => (
          <Box
            key={attribute}
            display={availableRefinements[attribute] ? 'block' : 'none'}
          >
            <Panel header={header}>
              <RefinementList
                attribute={attribute}
                availableRefinements={availableRefinements}
                setAvailableRefinements={setAvailableRefinements}
              />
            </Panel>
          </Box>
        ))}
        <Configure hitsPerPage={12} />
      </Styled.Refinements>
    </Styled.RefinementsBackground>
  );
}
