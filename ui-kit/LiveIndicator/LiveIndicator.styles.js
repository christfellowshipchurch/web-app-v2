import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const LiveIndicator = styled.div`
  display: block;
  padding: 0 ${themeGet('space.s')};
  color: ${themeGet('colors.white')};
  background-color: ${themeGet('colors.live')};
  border-radius: ${themeGet('radii.base')};
  font-size: ${themeGet('fontSizes.xs')};
  font-weight: ${themeGet('fontWeights.bold')};
  text-transform: uppercase;
  letter-spacing: 1px;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    padding: ${themeGet('space.xs')} ${themeGet('space.base')};
    font-size: ${themeGet('fontSizes.base')};
  }

  ${system}
`;

export default LiveIndicator;
