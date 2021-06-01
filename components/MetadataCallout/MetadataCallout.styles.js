import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';
import { CaretCircleDown } from 'phosphor-react';
import { Box } from 'ui-kit';

const Styled = {};

Styled.Callout = styled(Box)`
  background-color: ${themeGet('colors.neutrals.100')};
  border-radius: ${themeGet('radii.image')};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

Styled.CalloutHeader = styled(Box)`
  align-items: center;
  background-color: ${themeGet('colors.neutrals.500')};
  display: flex;
  font-weight: ${themeGet('fontWeights.bold')};
  height: ${themeGet('space.xxl')};
  padding: ${themeGet('space.s')} ${themeGet('space.s')};
`;

Styled.CaretCircleDown = styled(CaretCircleDown)`
  > path {
    fill: #fff;
  }
`;

Styled.CalloutDetails = styled(Box)`
  padding: ${themeGet('space.m')};
`;

Styled.CalloutDetailsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-left: ${themeGet('space.s')};

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    margin-left: ${themeGet('space.m')};
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

Styled.CalloutDetailsListItem = styled.li`
  font-size: ${themeGet('fontSizes.h5')};
  font-weight: 600;
  line-height: ${themeGet('fontSizes.h5')};
  margin: ${themeGet('space.xxs')} 0;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    margin-right: ${themeGet('space.xl')};
  }
`;

export default Styled;
