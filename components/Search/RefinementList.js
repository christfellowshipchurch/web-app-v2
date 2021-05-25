import { useEffect } from 'react';
import { connectRefinementList } from 'react-instantsearch-core';
import { Box } from 'ui-kit';

function RefinementList({
  availableRefinements,
  setAvailableRefinements,
  items,
  refine,
  attribute,
}) {
  useEffect(() => {
    if (availableRefinements[attribute] !== items.length) {
      setAvailableRefinements({
        ...availableRefinements,
        [attribute]: items.length,
      });
    }
  });

  return (
    <Box className="ais-RefinementList">
      <ul className="ais-RefinementList-list">
        {items.map(item => (
          <li key={item.value} className="ais-RefinementList-item">
            <label className="ais-RefinementList-label">
              <input
                className="ais-RefinementList-checkbox"
                type="checkbox"
                checked={item.isRefined}
                onChange={event => {
                  event.preventDefault();
                  refine(item.value);
                }}
              />
              <span className="ais-RefinementList-labelText">{item.label}</span>{' '}
              <span className="ais-RefinementList-count">{item.count}</span>
            </label>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default connectRefinementList(RefinementList);
