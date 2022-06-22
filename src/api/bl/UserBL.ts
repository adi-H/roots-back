import { getRepository, In } from 'typeorm';
import { User } from '../entities/User';
import * as jose from 'jose';
import config from '../../config';
export class UserBL {
  public static async getAll() {
    const userRepository = getRepository(User);

    try {
      return await userRepository.find();
    } catch (e) {
      console.log(e);
      return '';
    }
  }
  public static async getAllWithRoles() {
    const userRepository = getRepository(User);

    try {
      return await userRepository.find({
        relations: ['role'],
      });
    } catch (e) {
      console.log(e);
      return '';
    }
  }

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
      team: { id: teamId },
    });
  }

  public static async usersFromTeams(teamIds: number[]) {
    const userRepository = getRepository(User);

    return await userRepository.find({
      team: { id: In(teamIds) },
    });
  }

  public static async updateRole(userId: number, roleId: number) {
    const userRepository = getRepository(User);

    try {
      userRepository.update(userId, {
        role: {
          id: roleId,
        },
      });

      return true;
    } catch (e) {
      console.log(e);
      return '';
    }
  }
}
