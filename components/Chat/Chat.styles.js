import styled from 'styled-components';

import { system } from 'ui-kit';

const Chat = {};

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;

  ${system}
`;

Chat.CenteredContent = CenteredContent;

export default Chat;
