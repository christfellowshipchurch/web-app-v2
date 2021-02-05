import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const Community = styled.div`
  ${system}
`;

const Hero = styled.div`
  background-image: linear-gradient(
      rgba(246, 246, 246, 0) 15%,
      rgba(246, 246, 246, 0.75) 50%,
      rgba(246, 246, 246, 1) 80%
    ),
    url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=4050&q=80);
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
  font-size: 75px;
  /* Fallback: Set a background color. */
  background-color: red;

  /* Create the gradient. */
  background-image: linear-gradient(
    90.83deg,
    #ecb772 1.32%,
    #aece6a 34.52%,
    #34639a 99.63%
  );

  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;

  ${system}
`;

Community.Hero = Hero;
Community.Title = Title;

export default Community;
