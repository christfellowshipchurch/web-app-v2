import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

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

  if (remainder === 1 && index < 4) {
    span = 6;
  }

  return css`
    grid-column-end: span ${span};
  `;
};

const VerticalModalCardListFeature = styled.div`
  ${system}
`;

const CardSpacing = styled.div`
  ${cardSpan}
  ${system}
`;

VerticalModalCardListFeature.CardSpacing = CardSpacing;

export default VerticalModalCardListFeature;
