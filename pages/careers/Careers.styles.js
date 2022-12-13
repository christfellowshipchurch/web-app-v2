// Styling for our CareerPages
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { system } from 'ui-kit';

const CareerPages = styled.div``;

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
    min-height: 596px;
  }

  ${system}
`;

CareerPages.Hero = Hero;

export default CareerPages;
