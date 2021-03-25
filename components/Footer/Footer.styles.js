import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system, CardGrid } from 'ui-kit';

const Footer = styled.footer`
  min-height: 554px;
  padding-top: 128px;

  @media screen and (max-width: ${themeGet('breakpoints.lg')}) {
    align-items: center;
  }

  @media screen and (max-width: ${themeGet('breakpoints.md')}) {
    text-align: center;
  }

  ${system}
`;

const Link = styled.a`
  cursor: pointer;
  color: ${themeGet('colors.neutrals.100')};
  font-size: ${themeGet('fontSizes.h4')};
  line-height: ${themeGet('lineHeights.h4')};
  opacity: 60%;
  display: block;
  text-decoration: none;

  &:active,
  &:focus,
  &:hover {
    color: ${themeGet('colors.white')};
    text-decoration: underline;
  }

  ${system}
`;

const Grid = styled(CardGrid)`
  @media screen and (max-width: ${themeGet('breakpoints.lg')}) {
    justify-items: center;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Contact = styled.div`
  margin-top: calc(-${themeGet('space.xs')} - 42px);
  @media screen and (max-width: ${themeGet('breakpoints.lg')}) {
    text-align: center;
  }
`;

Footer.Link = Link;
Footer.Grid = Grid;
Footer.Contact = Contact;

export default Footer;
