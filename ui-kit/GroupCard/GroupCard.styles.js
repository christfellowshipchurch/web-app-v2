import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Card from 'ui-kit/Card/Card.styles';

const GroupCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;

const AvatarCount = styled.p`
  background-color: ${themeGet('colors.tertiary')};
  border-radius: ${themeGet('radii.xl')};
  bottom: ${themeGet('space.base')};
  color: ${themeGet('colors.white')};
  font-size: ${themeGet('fontSizes.xs')};
  margin-bottom: auto;
  padding: ${themeGet('space.xs')};
  position: relative;
  right: ${themeGet('space.base')};
`;

const DateTimeLabel = styled.p`
  align-items: center;
  display: flex;
  font-size: ${themeGet('fontSizes.xs')};
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

GroupCard.AvatarCount = AvatarCount;
GroupCard.DateTimeLabel = DateTimeLabel;
GroupCard.GradientBackground = GradientBackground;
GroupCard.GroupCardContent = GroupCardContent;
GroupCard.GroupCardTitle = GroupCardTitle;
GroupCard.GroupCardSubTitle = GroupCardSubTitle;

export default GroupCard;
