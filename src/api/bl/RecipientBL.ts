import { getRepository } from 'typeorm';
import { Recipient } from '../entities/Recipient';
import { Url } from '../entities/Url';
export class RecipientBL {
  public static async getAll() {
    const recipientRepository = getRepository(Recipient);

    return await recipientRepository.find();
  }
}
