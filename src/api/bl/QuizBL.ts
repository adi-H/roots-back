import { getRepository } from 'typeorm';
import { Quiz } from '../entities/Quiz';

export class QuizBL {
  public static async getAll() {
    const quizzesRepository = getRepository(Quiz);

    return await quizzesRepository.find();
  }

  public static async create(
    name: string,
    url: string,
    createdByUserId: string
  ) {
    const quizzesRepository = getRepository(Quiz);

    try {
      return await quizzesRepository.save([
        {
          name,
          url,
          createdBy: { id: createdByUserId },
        },
      ]);
    } catch (e) {
      console.log(e.stack);
      throw new Error('Could not create quiz');
      return null;
    }
  }

  public static async delete(id: number) {
    const quizzesRepository = getRepository(Quiz);

    try {
      await quizzesRepository.delete(id);
    } catch (e) {
      console.log(e.stack);
      throw new Error('Could not delete quiz');
    }
  }
}
