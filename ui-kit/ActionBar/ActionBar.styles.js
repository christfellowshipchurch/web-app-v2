import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import Card from 'ui-kit/Card/Card.styles';

import { system } from 'ui-kit';

const ActionBar = styled(Card)`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);

  padding: ${themeGet('space.base')} ${themeGet('space.s')};

  ${system}
`;

const Divider = styled.div`
  flex: 1;
  align-self: normal;

  max-width: 1px;

  background-color: ${themeGet('colors.black')};
  opacity: 0.35;
`;

ActionBar.Divider = Divider;

export default ActionBar;
