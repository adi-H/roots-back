import { getRepository, In, IsNull } from 'typeorm';
import { ClassType } from '../entities/ClassType';
import { Unit } from '../entities/Unit';
export class ClassTypeBL {
  public static async getAll() {
    const classTypeRepository = getRepository(ClassType);

    return await classTypeRepository.find();
  }
}
