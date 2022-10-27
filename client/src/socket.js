import io from "socket.io-client";

const socket = io();

export default socket;

// export const connectSocket = () => {
//   io("http://localhost:8080");
// };
