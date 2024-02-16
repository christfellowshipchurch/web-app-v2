import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const Groups = styled.div`
  ${system}
`;

const Hero = styled.div`
  background-image: linear-gradient(
      rgba(000, 000, 000, 0.3) 0%,
      rgba(000, 000, 000, 0.6) 100%
    ),
    url(/groups-cover-image.jpeg);
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media screen and (min-width: ${themeGet('breakpoints.xs')}) {
    align-items: center;
  }

  z-index: 3;
  ${system}
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${system}
`;

Groups.Hero = Hero;
Groups.Content = Content;

export default Groups;
