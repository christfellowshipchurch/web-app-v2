import { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { buttonStyles } from 'ui-kit/Button/Button.styles';

export default css`
  .ais-InstantSearch {
    width: 100%;
  }

  .ais-InstantSearch > .search-container {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .ais-InstantSearch .categories {
    padding-bottom: 0;

    @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
      width: 70%;
    }
  }

  .ais-InstantSearch .categories .ais-Panel-header {
    display: none;
  }

  .ais-InstantSearch > .right-panel {
    flex: 1;

    &.filtering {
      display: none;
    }

    @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
      display: block !important;
    }
  }

  .ais-Panel {
    border-radius: ${themeGet('radii.image')};
    margin-bottom: ${themeGet('space.s')};
    padding: ${themeGet('space.m')};

    :not(.categories) {
      background: ${themeGet('colors.bg')};
    }

    @media screen and (min-width: ${themeGet('breakpoints.md')}) {
      margin: ${themeGet('space.xs')};
    }

    @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
      margin: 0;
      margin-bottom: ${themeGet('space.s')};
    }
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

  .ais-RefinementList-item {
    font-size: ${themeGet('fontSizes.l')};
    margin: ${themeGet('space.s')} 0;

    @media screen and (min-width: ${themeGet('breakpoints.md')}) {
      display: block;
      font-size: ${themeGet('fontSizes.s')};
      margin: ${themeGet('space.xs')} 0;
    }
  }

  .ais-RefinementList-label {
    align-items: center;
    display: flex;
    line-height: 1;
    margin: ${themeGet('space.xxs')} 0;
  }

  .ais-RefinementList-checkbox {
    transform: scale(2);

    @media screen and (min-width: ${themeGet('breakpoints.md')}) {
      transform: unset;
    }
  }

  .ais-RefinementList-labelText {
    margin-left: ${themeGet('space.xs')};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ais-RefinementList-count {
    background: ${themeGet('colors.neutrals.100')};
    border: 1px solid ${themeGet('colors.fg')};
    border-radius: ${themeGet('radii.l')};
    margin-left: ${themeGet('space.xxs')};
    padding: 0 ${themeGet('space.xxs')};
  }

  .ais-ClearRefinements {
    display: flex;
    justify-content: center;

    @media screen and (min-width: ${themeGet('breakpoints.md')}) {
      display: unset !important;
    }
  }

  .ais-ClearRefinements-button {
    ${buttonStyles}
  }

  .ais-SearchBox {
    margin: ${themeGet('space.m')} auto;
    padding: 0 ${themeGet('space.m')};

    @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
      width: 700px;
    }
  }

  .ais-SearchBox-input {
    border-width: 0;
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

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }

  .ais-Hits-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
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

    &:active,
    &:focus {
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
