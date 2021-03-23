import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';
import './StreamChatOverrides.css';

const StreamChatClient = new StreamChat(process.env.NEXT_PUBLIC_STREAM_API_KEY);

export default StreamChatClient;
