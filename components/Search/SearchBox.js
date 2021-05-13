import { MagnifyingGlass } from 'phosphor-react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { useTheme } from 'styled-components';
import Styled from './Search.styles';

const SearchBox = ({ onSearchStateChange, currentRefinement, refine }) => {
  const theme = useTheme();
  return (
    <Styled.SearchContainer>
      <Styled.SearchBox
        type="search"
        placeholder="Search"
        value={currentRefinement}
        onChange={event => {
          refine(event.currentTarget.value);
        }}
      />
      <Styled.SearchIcon>
        <MagnifyingGlass color={theme.colors.fg} size="32" />
      </Styled.SearchIcon>
      <Styled.ClearButtonContainer>
        <Styled.ClearButton
          onClick={() => {
            onSearchStateChange({});
          }}
        >
          Clear
        </Styled.ClearButton>
      </Styled.ClearButtonContainer>
    </Styled.SearchContainer>
  );
};

export default connectSearchBox(SearchBox);
