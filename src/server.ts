import { server } from "./http";
import './websocket/ChatServer';

server.listen(5555, () => {
  console.log("Server is running");
});