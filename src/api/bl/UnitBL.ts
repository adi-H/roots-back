import { getRepository, In, IsNull } from 'typeorm';
import { Unit } from '../entities/Unit';
export class UnitBL {
  public static async getGdudim() {
    const unitRepository = getRepository(Unit);

    return await unitRepository.find({ where: { parent: IsNull() } });
  }

  // TODO: use sub queries instead of receiving the gdudim as a parameter - we don't have timee
  public static async getLowerLevelUnits(higherLevelIds: number[]) {
    const unitRepository = getRepository(Unit);

    return await unitRepository.find({ where: { parent: In(higherLevelIds) } });
  }

  public static async getAll() {
    const gdudim = await this.getGdudim();
    const plugot = await this.getLowerLevelUnits(gdudim.map((gdud) => gdud.id));
    const teams = await this.getLowerLevelUnits(
      plugot.map((pluga) => pluga.id)
    );

    return { gdudim, plugot, teams };
  }
}
