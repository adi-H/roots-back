import config from '../../config';
import { User } from '../entities/User';
import * as jose from 'jose';

export class Utilities {
  public static dateToTimestampWithoutTimezone(date: Date) {
    return `${date.getFullYear()}-${this.addZ(date.getMonth() + 1)}-${this.addZ(
      date.getDate()
    )} ${this.addZ(date.getHours())}:${this.addZ(
      date.getMinutes()
    )}:${this.addZ(date.getSeconds())}.${date.getMilliseconds()}`;
  }

  public static deserializeJWT = async (jwt: string): Promise<User> => {
    const result = await jose.jwtVerify(jwt, await config.getPublicKey());
    delete result.payload.iat;

    return (result.payload as unknown) as User;
  };

  public static addZ(n: number) {
    return n < 10 ? '0' + n : '' + n;
  }
}
