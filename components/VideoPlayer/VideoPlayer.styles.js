import styled from 'styled-components';

import { Heading, system } from 'ui-kit';

export const StyledHeading = styled(Heading)`
  -webkit-text-stroke: 1px black;
  text-shadow:
      3px 3px 0 #000,
    -1px -1px 0 #000,  
     1px -1px 0 #000,
     -1px 1px 0 #000,
      1px 1px 0 #000;
  }

  bottom: 18px;
  color: white;
  font-size: 28px;
  font-weight: 700;
  left: 34px;
  line-height: 35px;
  max-width: 400px;
  position: absolute;

  ${system}
`;

export const StyledRange = styled.input`
  bottom: 0;
  position: absolute;
  -webkit-appearance: none;
  width: 100%;
  background: transparent;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1px solid #000000;
    height: 6px;
    width: 36px;
    background: #ffffff;
    cursor: pointer;
    margin-bottom: -1px;
    // box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
`;

export const StyledVideo = styled.video`
  width: 100%;
`;
