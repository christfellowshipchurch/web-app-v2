import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const FAQ = styled.div`
  margin: ${themeGet('space.l')} ${themeGet('space.l')} 0px
    ${themeGet('space.l')};
  display: grid;
  grid-template-columns: ${props => (props?.fullWidth ? '1fr' : '1fr 1.5fr')};

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    max-width: ${props => props?.fullWidth && '900px'};
    margin: ${props => props?.fullWidth && '0 auto'};
  }

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    grid-template-columns: 1fr;
    margin: 0px;
  }

  ${system}
`;

export default FAQ;
