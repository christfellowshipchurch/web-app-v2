import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const centered = ({ centered }) => props => {
  if (centered) {
    return css`
      justify-content: center;
    `;
  }
};

const Loader = styled.div`
  align-items: center;
  display: flex;

  > *:first-child {
    margin-right: ${themeGet('space.s')};
  }

  ${centered}
  ${system}
`;

const Text = styled.p`
  font-weight: ${themeGet('fontWeights.bold')};

  ${system}
`;

Loader.Text = Text;

export default Loader;
