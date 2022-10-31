import MessageForm from "../../components/MessageForm/MessageForm";
import MessageList from "../../components/MessagesList/MessageList";
import UsersList from "../../components/UsersList/UsersList";
import "./chat-page.css";

const ChatPage = ({ users, messages }) => {
  return (
    <div className="chat">
      <div className="chat-window">
        <UsersList users={users} />
        <div className="chat__message-wrapper">
          <MessageList messages={messages} />
          <MessageForm />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
