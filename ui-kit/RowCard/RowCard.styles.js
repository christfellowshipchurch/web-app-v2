import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';
import Card from '../Card/Card.styles';

const RowCard = Card;
const RowCover = styled.div`
  background-color: ${themeGet('colors.fg')};
  background-image: url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom-left-radius: ${themeGet('radii.base')};
  border-top-left-radius: ${themeGet('radii.base')};
  height: 100%;
  min-width: 110px;
  position: relative;
`;

RowCard.RowCover = RowCover;

export default RowCard;
