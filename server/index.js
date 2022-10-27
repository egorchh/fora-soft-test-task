const express = require("express");
const cors = require("cors");
const rooms = require("./db");

const PORT = 8080;

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.get("/rooms", (req, res) => {
  res.json(rooms);
});

io.on("connection", (socket) => {
  console.log("user connected", socket.id);
});

server.listen(PORT, (err) => {
  if (err) {
    throw new Error(err);
  }

  console.log(`Server has been started on port ${PORT}`);
});
