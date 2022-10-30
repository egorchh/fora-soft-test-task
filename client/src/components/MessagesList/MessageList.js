import MessageItem from "../MessageItem/MessageItem";

import "./message-list.css";

const MessageList = () => {
  return (
    <ul className="message-list">
      <MessageItem />
      <MessageItem />
      <MessageItem />
    </ul>
  );
};

export default MessageList;
