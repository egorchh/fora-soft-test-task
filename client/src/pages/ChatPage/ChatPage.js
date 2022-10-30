import MessageForm from "../../components/MessageForm/MessageForm";
import MessageList from "../../components/MessagesList/MessageList";
import UsersList from "../../components/UsersList/UsersList";
import "./chat-page.css";

const ChatPage = () => {
  return (
    <div className="chat">
      <div className="chat-window">
        <UsersList />
        <div className="chat__message-wrapper">
          <MessageList />
          <MessageForm />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
