import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';
import { rem } from 'ui-kit/_utils';

const PageSingle = styled.div`
  ${system}
`;

const Hero = styled.div`
  background-image: url(${props => props.coverImage});
  background-position: center;
  background-size: cover;
  padding-top: 42.85%;
  margin-bottom: ${themeGet('space.l')};
`;

const Section = styled.div`
  align-items: center;
  background: ${themeGet('colors.neutrals.200')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${themeGet('space.xxl')} ${themeGet('space.l')};
  text-align: center;
`;

PageSingle.Hero = Hero;
PageSingle.Section = Section;

export default PageSingle;
