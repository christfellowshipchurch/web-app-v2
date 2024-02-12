import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Color from 'color';
import { system } from 'ui-kit';

export const primaryHover = () => props => {
  const primaryColor = themeGet('colors.primary')(props);

  return Color(primaryColor).saturate(0.1).darken(0.35).hex();
};

const HeroLanding = styled.div`
  z-index: 0;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100vh;
  min-height: 736px;
  width: 100vw;
  overflow: none;

  background-image: url(${props => props.backgroundImage});
  background-position: center;
  background-size: cover;

  ${system}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  color: ${themeGet('colors.white')};
  margin-top: 20%;

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    max-width: 100%;
    padding: 10px;
    margin-top: 66%;
  }
  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    max-width: 70%;
    margin-bottom: ${themeGet('space.xxl')};
    padding: 20px;
  }

  ${system}
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  color: ${themeGet('colors.white')};
  padding: 10px;

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    max-width: 100%;
    margin-bottom: 10px;
  }
  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    max-width: 100%;
    margin-top: ${themeGet('space.base')};
    flex-direction: row;
  }

  ${system}
`;

const Button = styled.button`
  background-color: rgba(0, 114, 188, 0.4);
  border: 2px solid transparent;
  color: ${themeGet('colors.white')};
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  font-family: ${themeGet('fonts.base')};
  font-size: ${themeGet('fontSizes.base')};
  font-weight: ${themeGet('fontWeights.bold')};
  padding-top: ${themeGet('space.s')};
  padding-bottom: ${themeGet('space.s')};
  padding-left: ${themeGet('space.l')};
  padding-right: ${themeGet('space.l')};
  text-decoration: none;
  transition: 0.3s ease-in-out;
  max-width: 350px;
  min-height: 80px;
  flex: 1;

  &:disabled {
    opacity: 0.5;
  }

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    padding-left: ${themeGet('space.base')};
    padding-right: ${themeGet('space.base')};
    min-height: 56px;
  }

  border-radius: 100px;
  line-height: 1;
  display: flex;
  flex-direction: row;
  backdrop-filter: blur(10px);
  boxshadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.25);

  &:active,
  &:focus,
  &:hover {
    background-color: ${primaryHover};
    color: ${themeGet('colors.white')};
  }

  ${system}
`;

const ButtonSubtitle = styled.p`
  font-size: 12px;
  font-weight: bold;
  padding-top: 0;
  text-align: left;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    font-size: 10px;
  }

  ${system}
`;

const ButtonTitle = styled.p`
  font-size: 20px;
  font-weight: normal;
  text-align: left;
  padding-top: ${themeGet('space.xs')};

  display: -webkit-box;
  -webkit-line-clamp: ${props => (props.isSubtitle ? '1' : '2')};
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    font-size: 14px;
  }

  ${system}
`;

const ButtonDescription = styled.p`
  font-size: 13px;
  font-weight: normal;
  text-align: left;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: neutrals.100;
  padding-top: ${themeGet('space.xs')};
  padding-bottom: 0;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${system}
`;

const Title = styled.h1`
  text-align: center;

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    font-size: 2rem;
    line-height: 2rem;
    margin-bottom: ${themeGet('space.xs')};
    max-width: 480px;
  }
  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    font-size: 4rem;
    line-height: 4rem;
    margin-bottom: ${themeGet('space.s')};
  }
`;

const Summary = styled.h2`
  font-weight: normal;
  padding-left: 4px;
  text-align: center;

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    font-size: 1.3rem;
    max-width: 480px;
  }
  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    font-size: 2rem;
    max-width: 700px;
  }
`;

const BackgroundVideo = styled.video`
  z-index: 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    width: 100%;
    height: 100%;
  }

  object-fit: cover;
`;

const VideoOverlay = styled.div`
  z-index: 1;
  position: absolute;
  top: -500px;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);
`;

HeroLanding.BackgroundVideo = BackgroundVideo;
HeroLanding.VideoOverlay = VideoOverlay;
HeroLanding.Content = Content;
HeroLanding.Title = Title;
HeroLanding.ButtonContainer = ButtonContainer;
HeroLanding.Button = Button;
HeroLanding.Summary = Summary;
HeroLanding.ButtonSubtitle = ButtonSubtitle;
HeroLanding.ButtonTitle = ButtonTitle;
HeroLanding.ButtonDescription = ButtonDescription;

export default HeroLanding;
