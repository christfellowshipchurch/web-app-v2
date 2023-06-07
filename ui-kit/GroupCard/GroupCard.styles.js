import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Card from 'ui-kit/Card/Card.styles';
import { rem } from 'ui-kit/_utils';

import { system } from 'ui-kit';

const labelColor = props => {
  if (props?.type === 'Virtual') {
    return css`
      background-color: ${themeGet('colors.success')};
    `;
  }
  return css`
    background-color: ${themeGet('colors.primary')};
  `;
};

const GroupCard = styled(Card)`
  display: flex;
  flex-direction: column;

  ${system}
`;

const AvatarCount = styled.p`
  align-items: center;
  background-color: ${themeGet('colors.tertiary')};
  border-radius: ${themeGet('radii.xl')};
  top: ${rem('-14px')};
  color: ${themeGet('colors.white')};
  display: flex;
  font-size: ${themeGet('fontSizes.xs')};
  font-weight: ${themeGet('fontWeights.bold')};
  height: ${rem('28px')};
  justify-content: center;
  margin-bottom: auto;
  position: absolute;
  right: ${rem('-8px')};
  width: ${rem('28px')};
`;

const DateTimeLabel = styled.p`
  align-items: center;
  display: flex;
  font-size: ${themeGet('fontSizes.s')};
  font-weight: ${themeGet('fontWeights.bold')};
  padding-bottom: ${themeGet('space.xs')};
`;

const GradientBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  padding-bottom: ${themeGet('space.xl')};
  padding-top: ${themeGet('space.xl')};
  min-height: 200px;

  background-image: linear-gradient(
      to top,
      rgb(255, 255, 255, 1),
      rgba(255, 255, 255, 0.4)
    ),
    url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-top-left-radius: ${themeGet('radii.base')};
  border-top-right-radius: ${themeGet('radii.base')};
`;

const GroupCardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${themeGet('space.base')};

  ${system}
`;

const GroupCardTitle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-left: ${themeGet('space.base')};
  padding-right: ${themeGet('space.base')};
`;
const GroupCardSubTitle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-left: ${themeGet('space.base')};
  padding-right: ${themeGet('space.base')};
  font-size: ${themeGet('fontSizes.s')};
  font-weight: ${themeGet('fontWeights.bold')};
  color: ${themeGet('colors.neutrals.500')};
`;

const GroupDescription = styled.p`
  display: -webkit-box;
  font-size: ${themeGet('fontSizes.s')};
  margin-top: ${themeGet('space.s')};
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${system}
`;

const SeeMore = styled.a`
  font-size: ${themeGet('fontSizes.s')};
  cursor: pointer;
  padding: 0px;
  margin: 0px;
`;

const Label = styled.b`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;

  margin: 1rem;
  padding: ${themeGet('space.xs')} ${themeGet('space.s')};

  background-color: ${props => props?.backgroundColor};
  backdrop-filter: blur(25px);
  box-shadow: ${themeGet('shadows.l')};
  border-radius: ${themeGet('radii.xxl')};
  color: ${themeGet('colors.white')};

  font-size: ${themeGet('fontSizes.xs')};
  font-weight: ${themeGet('fontWeights.bold')};

  z-index: 2;
`;

GroupCard.AvatarCount = AvatarCount;
GroupCard.DateTimeLabel = DateTimeLabel;
GroupCard.GradientBackground = GradientBackground;
GroupCard.GroupCardContent = GroupCardContent;
GroupCard.GroupCardTitle = GroupCardTitle;
GroupCard.GroupCardSubTitle = GroupCardSubTitle;
GroupCard.GroupDescription = GroupDescription;
GroupCard.Label = Label;
GroupCard.SeeMore = SeeMore;

export default GroupCard;
