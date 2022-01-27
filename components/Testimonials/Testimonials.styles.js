import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const Testimonials = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: ${themeGet('space.l')};
  alignitems: center;

  @media screen and (max-width: ${themeGet('breakpoints.lg')}) {
    grid-template-columns: 1fr;
    margin: ${themeGet('space.base')};
  }

  ${system}
`;

const Card = styled.div`
  background: white;
  border-radius: ${themeGet('radii.l')};
  box-shadow: ${themeGet('shadows.l')};
  margin-bottom: ${themeGet('space.base')};
  margin-left: ${themeGet('space.base')};
  margin-right: ${themeGet('space.base')};
  padding: ${themeGet('space.l')};
  text-align: center;
`;

Testimonials.Card = Card;

export default Testimonials;
