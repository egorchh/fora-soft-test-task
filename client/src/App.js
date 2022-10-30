import { useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import socket from "./socket";

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

  const onLogin = (loginData) => {
    dispatch({
      type: "JOINED",
      payload: loginData,
    });
    socket.emit("ROOM:JOIN", loginData);
  };

  useEffect(() => {
    socket.on("ROOM:JOINED", (users) => {
      console.log("New user joined", users);
    });
  }, []);

  window.socket = socket;

  console.log(state);

  return (
    <div className="app">
      {!state.joined ? <WelcomePage onLogin={onLogin} /> : <ChatPage />}
    </div>
  );
}

export default App;
