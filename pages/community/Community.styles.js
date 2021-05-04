import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';
import { rem } from 'ui-kit/_utils';

const Community = styled.div`
  ${system}
`;

const Hero = styled.div`
  background-image: linear-gradient(
      rgba(246, 246, 246, 0) 15%,
      rgba(246, 246, 246, 0.75) 50%,
      rgba(246, 246, 246, 1) 80%
    ),
    url(https://images.unsplash.com/photo-1600416341002-5399971810a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80);
  background-size: cover;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 600px;
  justify-content: flex-end;

  ${system}
`;

const Title = styled.h1`
  font-size: ${rem('50px')};

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    font-size: ${rem('65px')};
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    font-size: ${rem('75px')};
  }
  ${system}
`;

Community.Hero = Hero;
Community.Title = Title;

export default Community;
