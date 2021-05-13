import { connectRefinementList } from 'react-instantsearch-core';
import { Box } from 'ui-kit';
import Styled from './Search.styles';

const CategoriesList = ({ items, refine, createURL }) => {
  const sortedItems = [...items].sort((a, b) => (a.label > b.label ? 1 : -1));
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {sortedItems.map(item => (
        <Styled.CategoryItem
          key={item.label}
          isRefined={item.isRefined}
          href={createURL(item.value)}
          onClick={event => {
            event.preventDefault();
            refine(item.value);
          }}
        >
          {item.label}
        </Styled.CategoryItem>
      ))}
    </Box>
  );
};

export default connectRefinementList(CategoriesList);
