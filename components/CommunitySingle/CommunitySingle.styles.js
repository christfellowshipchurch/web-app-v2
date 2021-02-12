import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { system } from 'ui-kit';

const Hero = styled.div`
  align-items: center;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.33), rgba(71, 71, 71, 0.85)),
    url(${props => props.src});
  height: 298px;
  margin-bottom: ${themeGet('space.xl')};

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    border-radius: ${themeGet('radii.base')};
    margin: ${themeGet('space.xl')} ${themeGet('space.xxl')}
      ${themeGet('space.xl')};
    height: 596px;
  }

  ${system}
`;

export default Hero;
