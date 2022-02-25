import { getRepository } from 'typeorm';
import { User } from '../entities/User';

export class UserBL {
  public static async validatePassword(userId: string, password: string) {
    const userRepository = getRepository(User);

    try {
      const userToValidate = await userRepository.findOne(userId);

      if (userToValidate.password === password) {
        return true;
      } else {
        throw new Error();
      }
    } catch (e) {
      throw new Error('user not validated');
    }
  }
}
