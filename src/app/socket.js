import openSocket from "socket.io-client";

let socket;

const openConnection = function() {
  const port = "8500";
  socket = openSocket(`http://localhost:${port}`);
  console.log(`Connection to ${port} has been established`);
};

export default openConnection;
export { socket };
