import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Card from 'ui-kit/Card/Card.styles';
import { rem } from 'ui-kit/_utils';

import { system } from 'ui-kit';

const GroupCard = styled(Card)`
  display: flex;
  flex-direction: column;
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
  background-image: linear-gradient(
      to top,
      rgb(255, 255, 255, 1),
      rgba(255, 255, 255, 0.6)
    ),
    url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: ${themeGet('radii.base')};
  border-top-right-radius: ${themeGet('radii.base')};
  display: flex;
  justify-content: center;
  min-height: 200px;
  overflow: hidden;
  padding-bottom: ${themeGet('space.xl')};
  padding-top: ${themeGet('space.xl')};
  position: relative;
`;

const GroupCardContent = styled.div`
  padding: ${themeGet('space.base')};
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
  color: ${themeGet('colors.subdued')};
`;

const GroupDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${system}
`;

GroupCard.AvatarCount = AvatarCount;
GroupCard.DateTimeLabel = DateTimeLabel;
GroupCard.GradientBackground = GradientBackground;
GroupCard.GroupCardContent = GroupCardContent;
GroupCard.GroupCardTitle = GroupCardTitle;
GroupCard.GroupCardSubTitle = GroupCardSubTitle;
GroupCard.GroupDescription = GroupDescription;

export default GroupCard;
