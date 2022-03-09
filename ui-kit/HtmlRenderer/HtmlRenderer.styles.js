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

  p {
    margin-bottom: 0.75rem;
  }

  // H1-H3 will be considered "title" tags
  h1,
  h2,
  h3 {
    margin-top: 1.65rem;
    margin-bottom: 0.4rem;
  }

  // H4-H6 will be considered "subtitle" tags
  h4,
  h5,
  h6 {
    margin-bottom: 0.75rem;
  }

  img {
    border-radius: ${themeGet('radii.base')};
  }

  blockquote {
    border-top: 2px solid ${themeGet('colors.neutrals.300')};
    border-bottom: 2px solid ${themeGet('colors.neutrals.300')};

    text-align: center;

    padding: ${themeGet('space.l')};
    margin: ${themeGet('space.l')} ${themeGet('space.base')};
  }

  ${system};
`;

export default HtmlRenderer;
