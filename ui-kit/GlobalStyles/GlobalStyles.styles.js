import { createGlobalStyle, css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import algoliaStyles from './AlgoliaStyles.styles';

export const styles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 16px;
  }

  html,
  body {
    height: 100%;
  }

  body {
    background-color: ${themeGet(`colors.bg`)};
    color: ${themeGet('colors.fg')};
    font-family: ${themeGet('fonts.base')};
    font-size: ${themeGet('fontSizes.base')};
    line-height: ${themeGet('lineHeights.base')};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${themeGet('fonts.heading')};
    font-weight: ${themeGet('fontWeights.bold')};
    line-height: ${themeGet('lineHeights.heading')};
    margin: 0;
    margin-bottom: ${themeGet('space.s')};
  }

  h1 {
    font-size: ${themeGet('fontSizes.h2')};
  }

  h2 {
    font-size: ${themeGet('fontSizes.h3')};
  }

  h3 {
    font-size: ${themeGet('fontSizes.h4')};
  }

  h4 {
    font-size: ${themeGet('fontSizes.base')};
  }

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    h1 {
      font-size: ${themeGet('fontSizes.h1')};
    }

    h2 {
      font-size: ${themeGet('fontSizes.h2')};
    }

    h3 {
      font-size: ${themeGet('fontSizes.h3')};
    }

    h4 {
      font-size: ${themeGet('fontSizes.h4')};
    }
  }

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }

  a {
    color: ${themeGet('colors.primary')};
    transition: color 0.3s ease-in-out;
  }
  a:focus,
  a:hover,
  a:active {
    color: ${themeGet('colors.fg')};
  }

  /* Screen Reader Text */
  .srt {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  /* Standary Primary Button */
  .btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px;
    width: 100%;
    height: 52px;
    background: ${themeGet('colors.primary')};
    color: ${themeGet('colors.bg')};
    border-radius: 52px;
    cursor: pointer;
  }
  a.btn {
    text-decoration: none;
  }

  /* verse numbers in scripture (from bible.api) */
  .v {
    font-size: ${themeGet('fontSizes.xxs')};
    margin-right: 2px;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
  ${algoliaStyles}
`;

export default GlobalStyles;
