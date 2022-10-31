import { useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import socket from "./socket";
import axios from "axios";

import ChatPage from "./pages/ChatPage/ChatPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
    users: [],
    messages: [],
  });

  const onLogin = async (obj) => {
    try {
      dispatch({
        type: "JOINED",
        payload: obj,
      });
      socket.emit("ROOM:JOIN", obj);
      const { data } = await axios.get(`/rooms/${obj.roomId}`);
      setUsers(data.users);
    } catch (error) {
      throw new Error(error, "Ошибка при отправки GET запроса");
    }
  };

  const setUsers = (users) => {
    dispatch({
      type: "SET_USERS",
      payload: users,
    });
  };

  useEffect(() => {
    socket.on("ROOM:SET_USERS", setUsers);
    // eslint-disable-next-line
  }, []);

  window.socket = socket;

  return (
    <div className="app">
      {!state.joined ? (
        <WelcomePage onLogin={onLogin} />
      ) : (
        <ChatPage users={state.users} messages={state.messages} />
      )}
    </div>
  );
}

export default App;
