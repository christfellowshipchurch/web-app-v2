import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system, Card } from 'ui-kit';

// Methods
const cardSpan = ({ index, total }) => {
  /**
   * The Vertical Card List Feature should not show any blank caps in between cards.
   *
   * In order to compensate for when there is not an even row of 3 cards, we'll calculate the first handlful of cards in order to have them fill the gap.
   *
   * For Example:
   * [____]
   * [][][]
   *
   * [_][_]
   * [][][]
   *
   * [][][]
   * [][][]
   *
   */
  let remainder = total % 3;
  let span = 4;

  if (remainder < span && index < remainder) {
    span = 12 / remainder;
  }

  return css`
    grid-column-end: span ${span};
  `;
};

const VerticalCardListFeature = styled.div`
  ${system}
`;

const CardSpacing = styled(Card)`
  ${cardSpan}
  ${system}
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: space-between;

  padding: ${themeGet('space.base')};
  color: ${themeGet('colors.black')};

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    padding: ${themeGet('space.l')};
  }

  ${system}
`;

VerticalCardListFeature.Card = CardSpacing;
VerticalCardListFeature.Content = CardContent;

export default VerticalCardListFeature;
