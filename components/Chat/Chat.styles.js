import styled from 'styled-components';

import { system } from 'ui-kit';

const Chat = {};

const CenteredContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${system}
`;

Chat.CenteredContent = CenteredContent;

export default Chat;
