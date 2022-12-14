const { io } = require("socket.io-client");

exports.default = (store) => (next) => (action) => {
  const socket = io();
  socket.emit(action.type, action);

  next(action);
}