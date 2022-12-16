import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { Button, system } from 'ui-kit';

const Banner = styled.div`
  background-color: ${themeGet('colors.primary')};
  color: ${props => (props?.isLight ? 'black' : 'white')};
  grid-gap: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${themeGet('space.base')};
  font-size: 0.9rem;
  text-align: center;
  flex-direction: column;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    padding: ${themeGet('space.base')};
    font-size: 1.1rem;
    flex-direction: row;
    text-align: left;
  }

  /* This is necessary to override the styles set by the HtmlRenderer */
  p {
    margin: 0 !important;
  }

  ${system}
`;

const PrimaryButton = styled(Button)`
  background-color: ${themeGet('colors.secondary')};
  color: ${props => (props?.isLight ? themeGet('colors.primary') : 'white')};

  &:hover {
    background-color: ${themeGet('colors.secondary')};
    color: ${props =>
      props?.isLight ? themeGet('colors.neutrals.700') : 'white'};
  }
`;

const SecondaryButton = styled(Button)`
  background-color: ${props =>
    props?.isLight ? themeGet('colors.neutrals.800') : 'white'};
  color: ${themeGet('colors.secondary')};

  &:hover {
    background-color: ${props =>
      props?.isLight ? themeGet('colors.neutrals.700') : 'white'};
    color: ${themeGet('colors.secondary')};
  }
`;

Banner.PrimaryButton = PrimaryButton;
Banner.SecondaryButton = SecondaryButton;

export default Banner;
