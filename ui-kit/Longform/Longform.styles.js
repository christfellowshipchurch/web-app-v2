import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const Longform = styled.div`
  > p:not(:last-child),
  > ul:not(:last-child),
  > ol:not(:last-child) {
    margin-bottom: ${themeGet('space.base')};
  }

  > ul,
  > ol {
    margin-left: ${themeGet('space.base')};
    font-size: 1rem;
    > li:not(:last-child) {
      margin-bottom: ${themeGet('space.xs')};
    }
  }

  p {
    font-size: 1rem;
    margin-bottom: ${themeGet('space.s')};
  }

  img {
    border-radius: ${themeGet('radii.image')};
  }

  h1 {
    font-size: ${themeGet('fontSizes.h1')};
    line-height: ${themeGet('lineHeights.h1')};
  }

  h2 {
    font-size: ${themeGet('fontSizes.h2')};
    line-height: ${themeGet('lineHeights.h2')};
  }

  h3 {
    font-size: ${themeGet('fontSizes.h3')};
    line-height: ${themeGet('lineHeights.h3')};
  }

  h4 {
    font-size: ${themeGet('fontSizes.h4')};
    line-height: ${themeGet('lineHeights.h4')};
  }

  h5 {
    font-size: ${themeGet('fontSizes.h5')};
    line-height: ${themeGet('lineHeights.h5')};
  }

  blockquote {
    font-family: ${themeGet('fonts.heading')};
    font-size: ${themeGet('fontSizes.h4')};
    font-weight: 700;
    margin: 0 auto;
    padding: 60px 40px;
    position: relative;
    text-align: center;
    width: 70%;
  }

  blockquote::before {
    content: '“';
    font-size: ${themeGet('fontSizes.h1')};
    left: 0;
    position: absolute;
    top: 0;
  }

  blockquote::after {
    content: '”';
    font-size: ${themeGet('fontSizes.h1')};
    right: 0;
    position: absolute;
    bottom: 0;
  }

  ${system}
`;

export default Longform;
