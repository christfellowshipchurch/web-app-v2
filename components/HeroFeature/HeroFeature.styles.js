import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Color from 'color';
import { system } from 'ui-kit';

export const primaryHover = () => props => {
  const primaryColor = themeGet('colors.primary')(props);

  return Color(primaryColor).saturate(0.1).darken(0.35).hex();
};

const Hero = styled.div`
  z-index: 0;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 60vh;
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

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    max-width: 100%;
    padding: 10px;
  }
  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    max-width: 70%;
    padding: 20px;
  }

  ${system}
`;

const Button = styled.button`
  background-color: ${themeGet('colors.primary')};
  border: 1px solid transparent;
  color: ${themeGet('colors.white')};
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  font-family: ${themeGet('fonts.base')};
  font-size: ${themeGet('fontSizes.s')};
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: ${themeGet('space.base')};
  padding-right: ${themeGet('space.base')};
  text-decoration: none;
  transition: 0.3s ease-in-out;
  max-width: 350px;
  min-height: 40px;
  flex: 1;

  &:disabled {
    opacity: 0.5;
  }

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    padding-left: ${themeGet('space.base')};
    padding-right: ${themeGet('space.base')};
    min-height: 56px;
  }

  border-radius: ${themeGet('space.xs')};
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

const Title = styled.h1`
  text-align: center;
  text-wrap: pretty;

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    font-size: 2rem;
    line-height: 2rem;
    margin-bottom: ${themeGet('space.xs')};
    max-width: 480px;
  }
  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    font-size: 2.4rem;
    line-height: 4rem;
    max-width: 600px;
  }
`;

const Summary = styled.h2`
  font-weight: normal;
  padding-left: 4px;
  text-align: center;
  text-wrap: pretty;
  x @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    margin-top: ${themeGet('space.s')};
    font-size: 1.3rem;
    max-width: 480px;
  }
  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    font-size: 1.4rem;
    max-width: 750px;
  }
`;

const VideoOverlay = styled.div`
  z-index: 1;
  position: absolute;
  top: -500px;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.3);
`;

Hero.VideoOverlay = VideoOverlay;
Hero.Content = Content;
Hero.Title = Title;
Hero.Button = Button;
Hero.Summary = Summary;

export default Hero;
