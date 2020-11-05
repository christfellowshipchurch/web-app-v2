import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from '../';

const Longform = styled.div`
  > p:not(:last-child),
  > ul:not(:last-child),
  > ol:not(:last-child) {
    margin-bottom: ${themeGet('space.base')};
  }

  > ul,
  > ol {
    margin-left: ${themeGet('space.base')};

    > li:not(:last-child) {
      margin-bottom: ${themeGet('space.xs')};
    }
  }

  ${system}
`;

export default Longform;
