import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Box } from 'ui-kit';

const Styled = {};

const FilterButton = styled(Box)`
  bottom: ${themeGet('space.m')};
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 2;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    display: none;
  }
`;

Styled.FilterButton = FilterButton;

export default Styled;
