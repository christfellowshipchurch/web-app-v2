import styled from 'styled-components';

import { system } from 'ui-kit';

const ActionBarItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: ${({ theme }) => theme.colors.primary};

  ${system};
`;

export default ActionBarItem;
