import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system, propTypes } from '../ui-kit/_lib/system';

const Footer = styled.footer`
  ${system}
`;

const Link = styled.a`
  color: rgba(255, 255, 255, 0.75);
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

Footer.Link = Link;

Footer.propTypes = {
  ...propTypes,
};

export default Footer;
