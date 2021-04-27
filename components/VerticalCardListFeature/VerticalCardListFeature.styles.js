import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

// Methods
const cardSpan = ({ index, total }) => {
  console.log({ index, total });

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

  console.log({ span });

  return css`
    grid-column-end: span ${span};
  `;
};

const VerticalCardListFeature = styled.div`
  ${system}
`;

const CardSpacing = styled.div`
  ${cardSpan}
  ${system}
`;

VerticalCardListFeature.CardSpacing = CardSpacing;

export default VerticalCardListFeature;
