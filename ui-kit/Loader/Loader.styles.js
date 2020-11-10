import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from '../';

const Loader = styled.div`
  ${system}
`;

const blink = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Dot = styled.span`
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-name: ${blink};
  border-radius: 50%;
  font-size: 1.5em;

  ${system}
`;

const Text = styled.p`
  font-weight: ${themeGet('fontWeights.bold')};

  > *:nth-child(2) {
    animation-delay: 0.2s;
  }

  > *:nth-child(3) {
    animation-delay: 0.4s;
  }

  ${system}
`;

Loader.Dot = Dot;
Loader.Text = Text;

export default Loader;
