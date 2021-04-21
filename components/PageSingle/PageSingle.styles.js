import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';
import { rem } from 'ui-kit/_utils';

const PageSingle = styled.div`
  ${system}
`;

const Hero = styled.div`
  align-items: center;
  background-image: linear-gradient(
      rgba(000, 000, 000, 0.3) 0%,
      rgba(000, 000, 000, 0.6) 100%
    ),
    url(${props => props.coverImage});
  background-position: center;
  background-size: cover;
  color: ${themeGet('colors.white')} ${system};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${themeGet('space.xxl')} ${themeGet('space.l')};
  text-align: center;
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
