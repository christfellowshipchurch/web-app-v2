import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Box, system } from 'ui-kit';

const Section = {};

Section.Container = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

Section.Content = styled(Box)`
  max-width: ${themeGet('space.content')};
  padding-left: ${themeGet('space.xxl')};
  padding-right: ${themeGet('space.xxl')};
  width: 100%;

  @media screen and (max-width: ${themeGet('breakpoints.sm')}) {
    padding-left: ${themeGet('space.m')};
    padding-right: ${themeGet('space.m')};
  }

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    padding-left: ${themeGet('space.l')};
    padding-right: ${themeGet('space.l')};
  }

  @media screen and (min-width: ${themeGet('breakpoints.xl')}) {
    padding-left: 0;
    padding-right: 0;
  }

  ${system}
`;

export default Section;
