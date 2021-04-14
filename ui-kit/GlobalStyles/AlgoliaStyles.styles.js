import { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Button, { buttonStyles } from 'ui-kit/Button/Button.styles';

export default css`
  .ais-InstantSearch {
    display: flex;
    width: 100%;
  }

  .ais-InstantSearch > .left-panel {
    flex-basis: 250px;
    margin-right: ${themeGet('space.l')};
  }

  .ais-InstantSearch > .right-panel {
    flex: 1;
  }

  .ais-Panel {
    margin-top: ${themeGet('space.s')};
  }

  .ais-Panel-header {
    font-size: ${themeGet('fontSizes.h4')};
    font-weight: ${themeGet('fontWeights.bold')};
  }

  .ais-Panel--noRefinement {
    display: none;
  }

  .ais-RefinementList-list {
    list-style-type: none;
  }

  .ais-RefinementList-label {
    align-items: center;
    display: flex;
    line-height: 1;
    margin: ${themeGet('space.xxs')} 0;
  }

  .ais-RefinementList-labelText {
    margin-left: ${themeGet('space.xxs')};
  }

  .ais-RefinementList-count {
    background: ${themeGet('colors.neutrals.100')};
    border: 1px solid ${themeGet('colors.fg')};
    border-radius: ${themeGet('radii.l')};
    margin-left: ${themeGet('space.xxs')};
    padding: 0 ${themeGet('space.xxs')};
  }

  .ais-ClearRefinements-button {
    ${buttonStyles}
  }

  .ais-SearchBox {
    margin: 0 auto;
    width: 700px;
  }

  .ais-SearchBox-input {
    border-width: 1;
    border-radius: ${themeGet('radii.button')};
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.25);
    font-size: ${themeGet('fontSizes.h4')};
    padding: 0 25px;
    height: 52px;
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  .ais-SearchBox-submit, .ais-SearchBox-reset {
    display: none;
  }

  .ais-Hits-list {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
  }

  .ais-Hits-item {
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 0 ${themeGet('colors.neutrals.700')};
    margin: ${themeGet('space.s')};
    width: 250px;
  }

  .ais-Hits-item > div {
    height: 100%;
    padding: ${themeGet('space.s')};
  }

  .ais-Hits-item > div > img {
    border-radius: ${themeGet('radii.base')};
  }

  .ais-Hits-item .hit-name {
    font-weight: ${themeGet('fontWeights.bold')};
    margin-top: ${themeGet('space.xs')};
  }

  .ais-Hits-item .hit-description {
    margin-top: ${themeGet('space.xs')};
  }

  .ais-Highlight-highlighted {
    font-style: normal;
  }

  .ais-Pagination-list {
    display: flex;
    justify-content: center;
    list-style-type: none;
    width: 100%;
  }

  .ais-Pagination-item {
    color: ${themeGet('colors.neutrals.400')};
    font-size: ${themeGet('fontSizes.h4')};
    margin: 0 ${themeGet('space.xs')};
  }

  .ais-Pagination-link {
    text-decoration: unset;

    &:active, &:focus {
      color: ${themeGet('colors.primary')};
    }

    &:hover {
      color: ${themeGet('colors.secondary')};
    }
  }

  .ais-Pagination-link--selected {
    color: ${themeGet('colors.tertiary')} !important;
    cursor: default;
  }

`;
