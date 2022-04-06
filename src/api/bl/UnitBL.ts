import { getRepository, In, IsNull } from 'typeorm';
import { Unit } from '../entities/Unit';
export class UnitBL {
  public static async getGdudim() {
    const unitRepository = getRepository(Unit);

    return await unitRepository.find({ where: { parent: IsNull() } });
  }

  public static async getAll() {
    const unitRepository = getRepository(Unit);

    return await unitRepository.find({
      where: { parent: IsNull() },
      relations: ['children', 'children.children'],
    });
  }

  public static async getCompanyTeamsWithCadets(companyId: number) {
    const unitRepository = getRepository(Unit);

    return await unitRepository.findOne({
      where: { id: companyId },
      relations: [
        'children',
        'children.teamCadets',
        'children.teamCadets.attendance',
      ],
    });
  }
}
