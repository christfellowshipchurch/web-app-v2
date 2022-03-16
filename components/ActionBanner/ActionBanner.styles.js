import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const Banner = styled.div`
  color: ${themeGet('colors.white')};
  grid-gap: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${themeGet('space.base')};
  font-size: 0.9rem;
  text-align: center;
  flex-direction: column;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    padding: ${themeGet('space.base')};
    font-size: 1.1rem;
    flex-direction: row;
    text-align: left;
  }

  ${system}
`;

export default Banner;
