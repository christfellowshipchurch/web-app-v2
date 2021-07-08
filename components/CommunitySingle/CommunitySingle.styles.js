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
  min-height: 350px;
  justify-content: center;
  margin-bottom: ${themeGet('space.l')};
  text-align: center;
  padding: ${themeGet('space.l')} ${themeGet('space.s')};

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    border-radius: ${themeGet('radii.base')};
    margin: ${themeGet('space.xl')} ${themeGet('space.xxl')};
    min-height: 596px;
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

  // Option 1 ::
  /* border: 1px solid ${themeGet('colors.primary')};
  background: rgb(223, 243, 250); */

  // Option 2 ::
  /* border: 1px solid white;
  background: white;
  box-shadow: ${themeGet('shadows.base')}; */

  // Option 3 ::
  background: white;
  box-shadow: ${themeGet('shadows.base')};

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;

    margin: ${themeGet('space.xl')} ${themeGet('space.xxl')};
    padding: ${themeGet('space.l')} ${themeGet('space.xl')};
  }
`;

const BackButton = styled.div`
  color: white;
  margin-left: ${themeGet('space.s')};

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    margin-left: ${themeGet('space.xxl')};
    color: black;
  }
`;

CommunitySingle.BackButton = BackButton;
CommunitySingle.Hero = Hero;
CommunitySingle.NotifyMeSection = NotifyMeSection;

export default CommunitySingle;
