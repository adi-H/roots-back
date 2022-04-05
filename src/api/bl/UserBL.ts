import { getRepository, In } from 'typeorm';
import { User } from '../entities/User';
import * as jose from 'jose';
import config from '../../config';
import { Unit } from '../entities/Unit';
export class UserBL {
  public static async validatePassword(userId: string, password: string) {
    const userRepository = getRepository(User);

    try {
      const userToValidate = await userRepository.findOne(userId, {
        relations: ['team', 'role', 'team.parent', 'team.parent.parent'],
      });

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

  public static async usersFromTeam(teamId: number) {
    const userRepository = getRepository(User);

    return await userRepository.find({
      team: {id: teamId}
    });
  }

  public static async usersFromTeams(teamIds: number[]) {
    const userRepository = getRepository(User);

    return await userRepository.find({
      team: {id: In(teamIds)}
    });
  }
}
