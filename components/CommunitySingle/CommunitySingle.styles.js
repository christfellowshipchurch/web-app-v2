import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { system, utils } from 'ui-kit';

const CommunitySingle = {};

const Hero = styled.div`
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.33), rgba(71, 71, 71, 0.85)),
    url(${props => props.src});
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  height: 298px;
  justify-content: center;
  margin-bottom: ${themeGet('space.l')};
  text-align: center;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    border-radius: ${themeGet('radii.base')};
    margin: ${themeGet('space.xl')} ${themeGet('space.xxl')};
    height: 596px;
  }

  ${system}
`;

const NotifyMeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: ${themeGet('radii.base')};
  border: 2px solid ${themeGet('colors.border')};
  margin: ${themeGet('space.l')} ${themeGet('space.base')};
  margin-bottom: ${themeGet('space.xl')};
  padding: ${themeGet('space.l')} ${themeGet('space.base')};

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;

    margin: ${themeGet('space.xl')} ${themeGet('space.xxl')};
    padding: ${themeGet('space.l')} ${themeGet('space.xl')};
  }
`;

CommunitySingle.Hero = Hero;
CommunitySingle.NotifyMeSection = NotifyMeSection;

export default CommunitySingle;
