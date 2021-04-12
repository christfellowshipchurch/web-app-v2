import { themeGet } from '@styled-system/theme-get';
import { CaretLeft, CaretRight } from 'phosphor-react';
import styled, { css } from 'styled-components';

import { Image, Text, system } from 'ui-kit';

const Styled = {};

Styled.Image = styled(Image)`
  min-width: 255px;
  height: 145px;
  object-fit: cover;

  ${system}
`;

Styled.Text = styled(Text)`
  border-radius: ${themeGet('radii.image')};
  padding: ${themeGet('space.xs')} ${themeGet('space.s')};
  white-space: nowrap;

  ${system}
`;
const neighbors = ({ neighbors, numItems }) => props => {
  switch (neighbors) {
    case 'flat':
      return css`
        transform: translateX(${props => 100 * props.selected + 50}%)
          translateX(${props => 42}px);
      `;
    case '3d':
      const translateWidth = (numItems - 1) * 50;
      return css`
        transform: translateX(
            ${props => {
              if (props.selected === props.index) {
                return translateWidth;
              } else if (props.selected > props.index) {
                return translateWidth - 35;
              } else if (props.selected < props.index) {
                return translateWidth + 35;
              }
            }}%
          )
          translateX(${props => -100 * props.selected}%)
          translateZ(${props => Math.abs(props.index - props.selected) * -50}px);
        opacity: ${props => (props.index === props.selected ? 100 : 50)}%;
      `;
    case 'hidden':
    default:
      return css`
        transform: translate(
          ${props => 100 * (props.index - 2 * props.selected)}%
        );
        flex: 1 0 100%;
      `;
  }
};

Styled.Container = styled.div`
  top: 0;
  transition-duration: 600ms;

  ${neighbors}
  ${system}
`;

Styled.Content = styled.div`
  display: flex;
  position: relative;
  transform-style: preserve-3d;
  perspective: 100px;

  ${system}
`;

Styled.ArrowLeft = styled(CaretLeft)`
  left: 0;
  position: absolute;

  ${system}
`;

Styled.ArrowRight = styled(CaretRight)`
  position: absolute;
  right: 0;

  ${system}
`;

export default Styled;