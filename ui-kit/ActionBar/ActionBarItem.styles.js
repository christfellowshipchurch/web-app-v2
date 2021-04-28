import styled from 'styled-components';

import { system } from 'ui-kit';
import { themeGet } from '@styled-system/theme-get';

const ActionBarItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: ${themeGet('colors.primary')};

  ${system};
`;

export default ActionBarItem;
