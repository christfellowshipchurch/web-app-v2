// Styling for our JobDetails Page
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { system, utils } from 'ui-kit';

const JobDetails = styled.div``;

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
    /* border-radius: ${themeGet('radii.base')}; */
    /* margin: ${themeGet('space.xl')} ${themeGet('space.xxl')}; */
    min-height: 596px;
  }

  ${system}
`;

JobDetails.Hero = Hero;

export default JobDetails;
