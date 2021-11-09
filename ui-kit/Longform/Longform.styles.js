import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';
import { primaryHover } from 'ui-kit/Button/Button.styles'

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

  > a {
      color: ${themeGet('colors.primary')};
      
      &:active,
      &:focus,
      &:hover {
          color: ${primaryHover};
      }
  }

  ${system}
`;

export default Longform;
