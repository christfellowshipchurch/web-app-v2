import styled, { css } from 'styled-components';

import { system } from 'ui-kit';

// Methods
const cardSpan = ({ index, total }) => {
  /**
   * The Card Grid List Feature should not show any blank caps in between cards.
   *
   * In order to compensate for when there is not an even row of 4 cards, we'll calculate the first handlful of cards in order to have them fill the gap.
   *
   * For Example:
   *
   * [][][][]
   *
   * [_][_][_]
   * [][] [][]
   *
   * [][][][]
   * [][][][]
   *
   */
  let remainder = total % 4;
  let span = 3;

  if (remainder <= span && index < remainder) {
    span = 12 / remainder;
  }

  if (remainder === 1 && index < 4) {
    span = 6;
  }

  if (total === 1) {
    span = 12;
  }

  return css`
    grid-column-end: span ${span};
  `;
};

const cardSpanMedium = ({ index, total }) => {
  /**
   * We want to show 2 cards per row on medium devices.
   *
   * In order to compensate for when there is not an even row of 2 cards, we'll calculate the first handlful of cards in order to have them fill the gap.
   *
   * For Example:
   *
   * [_][_]
   *
   * [____]
   * [_][_]
   *
   * [_][_]
   * [_][_]
   * [_][_]

   */
  let remainder = total % 2;
  let span = 6;

  if (remainder === 1 && index < 1) {
    span = 12;
  }

  return css`
    grid-column-end: span ${span};
  `;
};

const CardGridFeature = styled.div`
  ${system}
`;

const CardSpacing = styled.div`
  // large devices
  @media (min-width: 992px) {
    ${cardSpan}
  }

  // medium devices
  @media (min-width: 768px) and (max-width: 991px) {
    ${cardSpanMedium}
  }

  // medium devices
  @media (max-width: 768px) {
  }

  ${system}
`;

CardGridFeature.CardSpacing = CardSpacing;

export default CardGridFeature;
