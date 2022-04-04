import { getRepository } from 'typeorm';
import { Items } from '../entities/Items';
import { Unit } from '../entities/Unit';

export class ItemsBL {
  public static async getByOwner(ownerId: string) {
    const itemsRepository = getRepository(Items)

    return await itemsRepository.find({
      where: {owner: ownerId},
      relations: ['owner', 'usedBy']
    })
  }

  public static async useItem(
      id: string,
      usedBy: string,
      quantity: number,
      description: string
    ) {
      const itemsRepository = getRepository(Items)
  
      try {
        const currentItem = await itemsRepository.findOne(id, {relations: ['owner', 'usedBy']});
        const unit = await getRepository(Unit).findOne(usedBy);
        await itemsRepository.update({id}, {quantity: currentItem.quantity - quantity})
        await itemsRepository.save({name: currentItem.name, quantity, owner: currentItem.owner, description, usedBy: unit, startedUseAt: new Date()})
      } catch (e) {
        console.log(e.stack);
        throw new Error('Could not use items');
      }
  }

  public static async deleteUsage(id: string) {
    const itemsRepository = getRepository(Items)

    try {
      const itemToDelete = await itemsRepository.findOne(id, {relations: ['owner', 'usedBy']});
      const itemsInInventory = (await itemsRepository.find({owner: itemToDelete.owner, name: itemToDelete.name, usedBy: null}))[0]
      await itemsRepository.update({id: itemsInInventory.id}, {quantity: itemsInInventory.quantity + itemToDelete.quantity})
      await itemsRepository.delete({id})
    } catch (e) {
      console.log(e.stack);
      throw new Error('Could not use items');
    }
  } 
}
