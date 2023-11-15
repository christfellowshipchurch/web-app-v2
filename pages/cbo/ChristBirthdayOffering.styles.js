import styled from 'styled-components';
import { system } from 'ui-kit';
import { themeGet } from '@styled-system/theme-get';

const ChristBirthdayOffering = styled.div`
  ${system}
`;

const Rhombus = styled.div`
  background: #cb2c30;
  margin: ${themeGet('space.xs')} ${themeGet('space.xs')};
  padding: ${themeGet('space.base')} ${themeGet('space.l')};
  transform: skewX(-15deg);
`;

const InnerBox = styled.div`
  transform: skewX(15deg);
`;

ChristBirthdayOffering.Rhombus = Rhombus;
ChristBirthdayOffering.InnerBox = InnerBox;

export default ChristBirthdayOffering;
