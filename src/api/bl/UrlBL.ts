import { getRepository } from 'typeorm';
import { Url } from '../entities/Url';
export class UrlBL {
  public static BROSH = 'ברוש';

  public static async getBroshURL() {
    const urlRepository = getRepository(Url);

    return await urlRepository.findOne({ where: { name: this.BROSH } });
  }
}
