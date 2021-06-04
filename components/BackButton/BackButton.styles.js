import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { system } from 'ui-kit';

const BackButton = styled.a`
  align-items: flex-center;
  display: flex;
  padding-left: ${themeGet('space.xxl')};
  padding-right: ${themeGet('space.xxl')};
  text-decoration: none;

  ${system}
`;

export default BackButton;
