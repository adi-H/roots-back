import { Server, Socket } from 'socket.io';
import { Unit } from '../entities/Unit';
import { User } from '../entities/User';
import { Utilities } from './Utilities';

interface ServerToClientEvents {
  sendCompany: (company: Unit) => void;
}

interface ClientToServerEvents {
  auth: (jwt: string) => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  name: string;
  age: number;
}

export class SocketConnection {
  public static io: Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterServerEvents,
    SocketData
  >;
  public static clients: Map<string, User> = new Map();

  public static initialize(
    io: Server<
      ClientToServerEvents,
      ServerToClientEvents,
      InterServerEvents,
      SocketData
    >
  ) {
    this.io = io;

    this.io.on('connection', (socket) => {
      socket.on('auth', async (jwt) => {
        try {
          const user = await Utilities.deserializeJWT(jwt);
          this.clients.set(socket.id, user);
          socket.join(user.team.parent.id.toString());
        } catch (e) {
          socket.disconnect();
        }
      });

      socket.on('disconnect', () => {
        this.clients.delete(socket.id);
      });
    });
  }

  public static sendCompany(pluga: Unit, room: number) {
    this.io.to(room.toString()).emit('sendCompany', pluga);
  }
}
