import { getRepository } from 'typeorm';
import { ItemUsage } from '../entities/ItemUsage';

export class ItemUsageBL {
  /**
   * Take an item out of the inventory
   *
   * @param usedItemId The id of item to take out
   * @param usedUnitId Which company is using the item
   * @param quantity The quantity used
   * @param description Free text description
   */
  public static async create(
    usedItemId: string,
    usedUnitId: number,
    quantity: number,
    reason?: string
  ): Promise<void> {
    const usageRepository = getRepository(ItemUsage);

    try {
      await usageRepository.save({
        item: { id: usedItemId },
        usedBy: { id: usedUnitId },
        quantity,
        reason,
        startedUseAt: new Date(),
      });
    } catch (e) {
      console.log(e.stack);
      throw new Error('Could not use items');
    }
  }

  /**
   * Return items that are no longer used to the inventory
   * @param id The id of the used items (The usage, not the items in the inventory)
   */
  public static async delete(id: number): Promise<void> {
    const usageRepository = getRepository(ItemUsage);

    try {
      await usageRepository.delete({ id });
    } catch (e) {
      console.log(e.stack);
      throw new Error('Could not use items');
    }
  }
}
