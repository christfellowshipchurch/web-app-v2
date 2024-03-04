import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Color from 'color';

import { Button, Modal, system } from 'ui-kit';

const EasterLocationsModal = styled(Modal)`
  ${system}
`;

const DontMissService = styled.div`
  margin-top: ${themeGet('space.base')};
  border-radius: 8px;
  border: 1px solid rgba(85, 83, 82, 0.5);
  display: flex;
  align-items: center;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    min-width: 350px;
    margin-left: ${themeGet('space.base')};
  }
`;

const CustomSelect = styled.select`
  appearance: none;
  background-color: ${themeGet('colors.white')};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'%3E%3C/path%3E%3C/svg%3E");
  background-position: right ${themeGet('space.s')} top 50%;
  background-repeat: no-repeat;
  box-sizing: border-box;
  color: ${themeGet('colors.fg')};
  display: block;
  font-family: ${themeGet('fonts.base')};
  font-size: ${themeGet('fontSizes.base')};
  max-width: 100%;
  padding: ${themeGet('space.s')};
  word-wrap: break-word;

  font-size: 18px;
  border-color: transparent;
  padding: 0px 24px 0px 4px;

  :focus {
    border-color: transparent;
    outline: none;
  }
  &[disabled] {
    opacity: 0.6;
  }

  ${system}
`;
const MessageSelect = styled.select`
  appearance: none;
  background-color: ${themeGet('colors.white')};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'%3E%3C/path%3E%3C/svg%3E");
  background-position: right ${themeGet('space.s')} top 50%;
  background-repeat: no-repeat;
  box-sizing: border-box;
  color: ${themeGet('colors.fg')};
  display: block;
  font-family: ${themeGet('fonts.base')};
  font-size: ${themeGet('fontSizes.base')};
  max-width: 100%;
  word-wrap: break-word;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  font-size: 18px;
  padding: 0px 24px 0px 4px;
  width: 330px;
  border-color: transparent;

  :focus {
    border-color: transparent;
    outline: none;
  }
  &[disabled] {
    opacity: 0.6;
  }
  ${system}
`;

const ServiceDayTitle = styled.div`
  font-family: retroica;
  font-size: 22px;
  text-decoration: underline;
`;

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
  padding: ${themeGet('space.xs')} ${themeGet('space.l')};
  border: 1px solid #000;
  border-radius: 50px;
  margin-top: ${themeGet('space.xs')};

  &:hover,
  &:focus,
  &:active {
    background-color: ${redHover};
  }
`;

const SendTextMessage = styled(Button)`
  color: black;
  margin-top: ${themeGet('space.s')};
  background-color: #ffec7f;
  border: 1px solid #000;
  border-radius: 50px;

  align-self: center;
  padding: ${props => (props?.cfe ? '10px 50px;' : '10px 70px;')};

  &:hover,
  &:focus,
  &:active {
    color: black;
    background-color: ${yellowHover};
  }

  ${system}
`;

EasterLocationsModal.DontMissService = DontMissService;
EasterLocationsModal.ServiceDayTitle = ServiceDayTitle;
EasterLocationsModal.JoinOnlineButton = JoinOnlineButton;
EasterLocationsModal.SendTextMessage = SendTextMessage;
EasterLocationsModal.MessageSelect = MessageSelect;
EasterLocationsModal.CustomSelect = CustomSelect;

export default EasterLocationsModal;
