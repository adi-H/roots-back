import { getRepository } from 'typeorm';
import { User } from '../entities/User';
import * as jose from 'jose';
import config from '../../config';
import { Unit } from '../entities/Unit';
export class UnitBL {
  public static async getAllUnits() {
    const unitRepository = getRepository(Unit);

    return await unitRepository.find();
  }
}
