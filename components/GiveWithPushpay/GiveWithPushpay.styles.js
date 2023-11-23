import styled from 'styled-components';
import { system, TextInput } from 'ui-kit';
import { themeGet } from '@styled-system/theme-get';

const GiveWithPushpay = styled.div`
  id: give;
  padding: ${themeGet('space.xxl')} ${themeGet('space.base')};
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: white;
  ${system}
`;

const Input = styled(TextInput)`
  border: none;
  background-color: ${themeGet('colors.neutrals.100')};
  color: ${themeGet('colors.neutrals.300')};
  font-size: 80px;
  font-weight: bold;
  text-align: center;
  type: text;
  margin-top: ${themeGet('space.s')};
`;

const Rhombus = styled.div`
  background: #cb2c30;
  margin: ${themeGet('space.xs')} ${themeGet('space.xs')};
  padding: ${themeGet('space.base')} ${themeGet('space.l')};
  transform: skewX(-15deg);
`;

const GiveByMail = styled.div`
  transform: skewX(15deg);
`;

GiveWithPushpay.Rhombus = Rhombus;
GiveWithPushpay.GiveByMail = GiveByMail;
GiveWithPushpay.Input = Input;

export default GiveWithPushpay;
