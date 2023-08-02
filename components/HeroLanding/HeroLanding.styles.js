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
  justify-content: center;

  width: 100vw;
  overflow: none;

  background-image: url(${props => props.backgroundImage});
  background-position: center;
  background-size: cover;

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    height: 100vh;
  }
  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    height: 91vh;
  }

  ${system}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  color: ${themeGet('colors.white')};

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    max-width: 100%;
    padding: 10px;
  }
  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    max-width: 70%;
    margin-top: ${themeGet('space.base')};
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
  position: absolute;
  bottom: 0px;
  color: ${themeGet('colors.white')};

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    max-width: 100%;
    padding: 10px;
  }
  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    max-width: 100%;
    margin-top: ${themeGet('space.base')};
    padding: 20px;
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
  font-family: ${themeGet('fonts.base')};
  font-size: ${themeGet('fontSizes.base')};
  font-weight: ${themeGet('fontWeights.bold')};
  padding-top: ${themeGet('space.s')};
  padding-bottom: ${themeGet('space.s')};
  padding-left: ${themeGet('space.l')};
  padding-right: ${themeGet('space.l')};
  text-decoration: none;
  transition: 0.3s ease-in-out;

  &:disabled {
    opacity: 0.5;
  }

  border-radius: 100px;
  py: s;
  px: base;
  lineheight: 1;
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

const Title = styled.h1`
  text-align: center;

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    font-size: 2rem;
    line-height: 2rem;
    margin-bottom: ${themeGet('space.xs')};
    position: absolute;
    top: 240px;
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
    font-size: 1.4rem;
    position: absolute;
    top: 280px;
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

export default HeroLanding;
