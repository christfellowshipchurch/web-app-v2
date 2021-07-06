import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';
import { Box } from 'ui-kit';

const Styled = {};

Styled.Callout = styled(Box)`
  background-color: ${themeGet('white')};
  border-radius: ${themeGet('radii.image')};
  box-shadow: 0px 5px 20px 0px rgb(0 0 0 / 10%);
  overflow: hidden;
`;

Styled.CalloutHeader = styled(Box)`
  align-items: center;
  display: flex;
  font-weight: ${themeGet('fontWeights.bold')};
  height: ${themeGet('space.xxl')};
  padding: ${themeGet('space.s')} ${themeGet('space.s')};
`;

Styled.CalloutDetails = styled(Box)`
  padding: ${themeGet('space.m')};
`;

Styled.CalloutDetailsList = styled(Box)`
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

Styled.CalloutDetailsListItem = styled(Box)`
  border-bottom: 1px solid ${themeGet('colors.neutrals.200')};
  display: flex;
  margin: 0 ${themeGet('space.m')};
  padding: ${themeGet('space.xs')} 0;
`;

Styled.CalloutDetailsListItemLabel = styled(Box)`
  font-size: ${themeGet('fontSizes.h5')};
  font-weight: 600;
  line-height: ${themeGet('fontSizes.h5')};
  margin: ${themeGet('space.xxs')} 0;
  flex-basis: 150px;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    margin-right: ${themeGet('space.xl')};
  }
`;

export default Styled;
