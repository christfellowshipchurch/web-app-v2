import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Color from 'color';

import { Button, Modal, system } from 'ui-kit';

const EasterLocationsModal = styled(Modal)`
  ${system}
`;

const DontMissService = styled.div`
  margin-top: ${themeGet('space.l')};
  border-radius: 8px;
  border: 1px solid rgba(85, 83, 82, 0.5);
  display: flex;
  align-items: center;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    min-width: 350px;
    margin-left: ${themeGet('space.base')};
  }
`;

const ServiceDayTitle = styled.div`
  font-family: retroica;
  font-size: 22px;
  text-decoration: underline;
`;

export const blueHover = () => props => {
  const primaryColor = '#3B7DD9';

  return Color(primaryColor).saturate(0.1).darken(0.35).hex();
};

export const redHover = () => props => {
  const primaryColor = '#d65025';

  return Color(primaryColor).saturate(0.1).darken(0.35).hex();
};

export const yellowHover = () => props => {
  const primaryColor = '#ffec7f';

  return Color(primaryColor).saturate(0.1).darken(0.35).hex();
};

const JoinOnlineButton = styled(Button)`
  font-size: 18px;
  background-color: #d65025;
  padding: 0 ${themeGet('space.l')};
  border: 1px solid #000;
  border-radius: 50px;

  &:hover {
    background-color: ${redHover};
  }
`;

const AddToCalendar = styled(Button)`
  margin-top: ${themeGet('space.s')};
  background-color: #3b7dd9;
  border: 1px solid #000;
  border-radius: 50px;

  &:hover {
    background-color: ${blueHover};
  }
`;
const SendTextMessage = styled(Button)`
  color: black;
  margin-top: ${themeGet('space.s')};
  background-color: #ffec7f;
  border: 1px solid #000;
  border-radius: 50px;

  &:hover {
    color: black;
    background-color: ${yellowHover};
  }
`;

EasterLocationsModal.DontMissService = DontMissService;
EasterLocationsModal.ServiceDayTitle = ServiceDayTitle;
EasterLocationsModal.JoinOnlineButton = JoinOnlineButton;
EasterLocationsModal.SendTextMessage = SendTextMessage;
EasterLocationsModal.AddToCalendar = AddToCalendar;

export default EasterLocationsModal;
