import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { system } from 'ui-kit';
import { primaryHover } from 'ui-kit/Button/Button.styles';

const HtmlRenderer = styled.div`
  > ul,
  > ol {
    margin-top: ${themeGet('space.base')};
    margin-bottom: ${themeGet('space.base')};
  }

  ul,
  ol {
    padding-left: ${themeGet('space.base')};

    li {
      margin-top: ${themeGet('space.xs')};
      margin-bottom: ${themeGet('space.xs')};
    }
  }
  
  a {
    color: ${themeGet('colors.primary')};
    
    &:active,
    &:focus,
    &:hover {
      color: ${primaryHover};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    &:not(:first-child) {
      margin-top: ${themeGet('space.base')};
      margin-bottom: ${themeGet('space.base')};
    }
  }

  img {
    border-radius: ${themeGet('radii.base')};
  }

  ${system};
`;

export default HtmlRenderer;
