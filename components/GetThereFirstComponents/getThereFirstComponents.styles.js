import themeGet from '@styled-system/theme-get';
import styled from 'styled-components';

import { system } from 'ui-kit';

const GetThereFirst = {};

const ImageCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${themeGet('space.s')};
  margin-top: ${themeGet('space.l')};
  justify-content: start;
  align-items: center;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    flex-direction: row;
    justify-content: center;
  }
`;

const GetThereFirstCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  align-items: center;
  justify-content: start;
  padding-bottom: ${themeGet('space.base')};

  margin-top: ${themeGet('space.base')};

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    margin-top: ${themeGet('space.l')};
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    justify-content: center;
  }
`;

const GetThereFirstCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0d264f;
  color: white;
  text-align: center;

  width: 340px;
  height: 340px;

  box-shadow: 0px 8px 20px -5px rgba(0, 0, 0, 0.25);

  padding-top: ${themeGet('space.base')};
  padding-bottom: ${themeGet('space.base')};
  margin-top: ${themeGet('space.base')};
  margin-bottom: ${themeGet('space.base')};

  border-radius: ${themeGet('space.base')};

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    margin-left: ${themeGet('space.s')};
    margin-right: ${themeGet('space.s')};

    padding-bottom: ${themeGet('space.l')};
  }

  @media screen and (min-width: ${themeGet('breakpoints.xl')}) {
    margin-right: ${themeGet('space.base')};
  }
  ${system}
`;

GetThereFirst.ImageCardsContainer = ImageCardsContainer;
GetThereFirst.GetThereFirstCardsContainer = GetThereFirstCardsContainer;
GetThereFirst.GetThereFirstCards = GetThereFirstCards;

export default GetThereFirst;
