import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from '../';

const Loader = styled.div`
  align-items: center;
  display: flex;

  > *:first-child {
    margin-right: ${themeGet('space.s')};
  }

  ${system}
`;

const Text = styled.p`
  font-weight: ${themeGet('fontWeights.bold')};

  ${system}
`;

Loader.Text = Text;

export default Loader;
