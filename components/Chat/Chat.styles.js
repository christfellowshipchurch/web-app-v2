import styled from 'styled-components';

import { system } from 'ui-kit';

const Chat = {};

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;

  ${system}
`;

Chat.CenteredContent = CenteredContent;

export default Chat;
