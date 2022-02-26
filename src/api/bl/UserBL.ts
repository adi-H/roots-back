import { getRepository } from 'typeorm';
import { User } from '../entities/User';
import * as jose from 'jose';
import config from '../../config';
export class UserBL {
  public static async validatePassword(userId: string, password: string) {
    const userRepository = getRepository(User);

    try {
      const userToValidate = await userRepository.findOne(userId);

      if (userToValidate.password === password) {
        delete userToValidate.password;
        const jwt = await new jose.SignJWT({ ...userToValidate })
          .setProtectedHeader({ alg: 'RS256' })
          .setIssuedAt()
          .sign(await config.getPrivateKey());

        return jwt;
      } else {
        throw new Error();
      }
    } catch (e) {
      console.log(e);
      return '';
    }
  }
}
