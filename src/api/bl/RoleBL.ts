import { getRepository } from 'typeorm';
import { Role } from '../entities/Role';

export class RoleBL {
  public static async getAll() {
    const roleRepository = getRepository(Role);

    return await roleRepository.find();
  }
}
