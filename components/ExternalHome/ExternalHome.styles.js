import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const ExternalHome = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url(/groups-cover-image.jpg);

  ${system}
`;

export default ExternalHome;
