'use strict'
import io from 'socket.io-client';
let socket = io('http://localhost:3050');
function startClient() {

  socket.on("connect", () => {
    console.log(`Connected to Socket Server. Client Id: ${socket.id}`);
  });
  //All the socket listeners

  socket.on('serverUpdatedCount', (newCount) => {
    console.log('[SERVER] Count:', newCount);

    //How to set the capacity value from here:

  });
  return socket;
}
module.exports = { startClient: startClient, socket: socket };