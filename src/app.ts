import server from './server';
import config from './config';
import Logger from './logger';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { SocketConnection } from './api/services/SocketConnection';

const startServer = async () => {
  const app = await server();
  const httpServer = createServer(app);
  const io = new Server(httpServer, {
    cors: { origin: config.clientHost, credentials: true },
  });
  SocketConnection.initialize(io);

  httpServer.listen(config.port, () => {
    Logger.info(`
      ################################################
      #  Server listening on port: ${config.port}    
      ################################################
    `);
  });
};

(async () => {
  startServer();
})();
