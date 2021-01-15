import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const FormLabel = styled.label`
  display: block;
  font-size: ${themeGet('fontSizes.s')};
  font-weight: ${themeGet('fontWeights.bold')};
  margin-bottom: ${themeGet('space.s')};

  ${system}
`;

export default FormLabel;
