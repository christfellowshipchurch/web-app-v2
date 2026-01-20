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
  background-color: rgba(54, 25, 25, 0.00004);
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
  display: block;
  @media screen and (max-width: ${themeGet('breakpoints.sm')}) {
    display: none;
  }
`;

const GiveByMail = styled.div`
  transform: skewX(15deg);
`;

const GiveOneTimeButton = styled.div`
  @media screen and (max-width: ${themeGet('breakpoints.sm')}) {
    width: 150px;
  }
  padding-top: ${themeGet('space.s')};
  padding-bottom: ${themeGet('space.s')};
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.selected === 'giveOneTime' ? themeGet('colors.primary') : 'white'};
  color: ${props =>
    props.selected === 'giveOneTime' ? 'white' : themeGet('colors.primary')};
  border: 2px solid;
  border-color: ${themeGet('colors.primary')};
  font-weight: bold;
  &:hover {
    transition: 0.5s ease-in-out;
    cursor: pointer;
    background-color: ${themeGet('colors.secondary')};
  }
`;

const SetRecurringButton = styled.div`
  @media screen and (max-width: ${themeGet('breakpoints.sm')}) {
    width: 150px;
  }
  padding-top: ${themeGet('space.s')};
  padding-bottom: ${themeGet('space.s')};
  width: 300px;
  border: 2px solid;
  border-color: ${themeGet('colors.primary')};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.selected === 'giveRecurring' ? themeGet('colors.primary') : 'white'};
  color: ${props =>
    props.selected === 'giveRecurring' ? 'white' : themeGet('colors.primary')};
  font-weight: bold;
  &:hover {
    transition: 0.5s ease-in-out;
    cursor: pointer;
    background-color: ${themeGet('colors.secondary')};
    color: white;
    border-color: ${themeGet('colors.secondary')};
  }
`;

GiveWithPushpay.Rhombus = Rhombus;
GiveWithPushpay.GiveByMail = GiveByMail;
GiveWithPushpay.Input = Input;
GiveWithPushpay.GiveOneTimeButton = GiveOneTimeButton;
GiveWithPushpay.SetRecurringButton = SetRecurringButton;

export default GiveWithPushpay;
