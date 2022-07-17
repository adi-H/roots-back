import { getRepository } from 'typeorm';
import { CreateItem, Items } from '../entities/Items';
import { Unit } from '../entities/Unit';

export class ItemsBL {
  /**
   * Get all of the items owned by this company
   * @param ownerId The id of the owner company
   * @returns An array of the items owned by the company
   */
  public static async getByOwner(ownerId: string): Promise<Items[]> {
    const itemsRepository = getRepository(Items);

    const items = await itemsRepository.find({
      where: [{ owner: ownerId }],
      relations: ['owner', 'owner.parent', 'borrowedByMe'],
    });

    return items;
  }

  /**
   * Create a new item in the inventory
   *
   * @param name The item's name (In hebrew)
   * @param quantity The total quantity
   * @param ownerId Which company's inventory does the item belong to
   */

  public static async create(item: CreateItem) {
    const itemsRepository = getRepository(Items);

    try {
      const owner = await getRepository(Unit).findOne(item.owner);
      const foundItem = await itemsRepository.findOne({ name: item.name });
      if (!!foundItem) {
        foundItem.totalQuantity += item.totalQuantity;
        foundItem.unUseableQuantity += item.unUseableQuantity;
        return await itemsRepository.save(foundItem);
      } else {
        return await itemsRepository.save({
          ...item,
          owner,
          usedBy: owner,
        });
      }
    } catch (e) {
      console.log(e.stack);
      throw new Error('Could not use items');
    }
  }

  public static async edit(itemToEdit: any) {
    const itemsRepository = getRepository(Items);

    try {
      await itemsRepository.update(itemToEdit.id, itemToEdit);
    } catch (e) {
      console.log(e.stack);
      throw new Error('Could not update item');
    }
  }

  public static async delete(id: number) {
    const itemsRepository = getRepository(Items);

    try {
      await itemsRepository.delete(id);
    } catch (e) {
      console.log(e.stack);
      throw new Error('Could not delete item');
    }
  }
}
