import { getRepository } from 'typeorm';
import { Item } from '../entities/Item';
import { Unit } from '../entities/Unit';

export class ItemBL {
  /**
   * Get all of the items owned by this company
   * @param ownerId The id of the owner company
   * @returns An array of the items owned by the company
   */
  public static async getByOwner(ownerId: string): Promise<Item[]> {
    const itemsRepository = getRepository(Item);

    return await itemsRepository.find({
      where: [{ owner: ownerId }, { usedBy: ownerId }],
      relations: ['owner', 'owner.parent', 'usedBy', 'usedBy.parent'],
    });
  }

  /**
   * Create a new item in the inventory
   *
   * @param name The item's name (In hebrew)
   * @param quantity The total quantity
   * @param ownerId Which company's inventory does the item belong to
   */
  public static async create(
    name: string,
    quantity: number,
    ownerId: string,
    description?: string
  ) {
    const itemsRepository = getRepository(Item);

    try {
      const owner = await getRepository(Unit).findOne(ownerId);
      if (owner) {
        const foundItem = await itemsRepository.findOne(
          { name },
          { relations: ['owner'] }
        );

        if (!!foundItem && foundItem.owner.id === owner.id) {
          foundItem.quantity += quantity;
          return await itemsRepository.save(foundItem);
        } else {
          return await itemsRepository.save({
            name,
            description,
            quantity,
            owner,
            createdAt: new Date(),
          });
        }
      }
    } catch (e) {
      console.log(e.stack);
      throw new Error('Could not use items');
    }
  }

  public static async delete(itemId: number) {
    const itemsRepository = getRepository(Item);

    try {
      await itemsRepository.delete(itemId);
    } catch (e) {
      console.log(e.stack);
      throw new Error('Could not delete item');
    }
  }
}
