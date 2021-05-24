import { connectRefinementList } from 'react-instantsearch-core';
import { Box } from 'ui-kit';

function RefinementList({
  availableRefinements,
  setAvailableRefinements,
  items,
  refine,
  attribute,
}) {
  if (availableRefinements[attribute] !== items.length) {
    setAvailableRefinements({
      ...availableRefinements,
      [attribute]: items.length,
    });
  }

  return (
    <Box className="ais-RefinementList">
      <ul className="ais-RefinementList-list">
        {items.map(item => (
          <li key={item.value} className="ais-RefinementList-item">
            <label class="ais-RefinementList-label">
              <input
                class="ais-RefinementList-checkbox"
                type="checkbox"
                checked={item.isRefined}
                onClick={event => {
                  event.preventDefault();
                  refine(item.value);
                }}
              />
              <span class="ais-RefinementList-labelText">{item.label}</span>{' '}
              <span class="ais-RefinementList-count">{item.count}</span>
            </label>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default connectRefinementList(RefinementList);
