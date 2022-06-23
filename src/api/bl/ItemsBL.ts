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

		return await itemsRepository.find({
			where: [ { owner: ownerId }, { usedBy: ownerId } ],
			relations: [ 'owner', 'owner.parent', 'usedBy', 'usedBy.parent' ]
		});
	}

	/**
   * Take an item out of the inventory
   *
   * @param id The id of item to take out
   * @param usedBy Which company is using the item
   * @param quantity The quantity used
   * @param description Free text description
   */
	public static async useItem(id: string, usedBy: string, quantity: number, description: string): Promise<void> {
		const itemsRepository = getRepository(Items);

		try {
			const currentItem = await itemsRepository.findOne(id, {
				relations: [ 'owner', 'usedBy' ]
			});
			const unit = await getRepository(Unit).findOne(usedBy);
			await itemsRepository.update({ id }, { readyToUseQuantity: currentItem.readyToUseQuantity - quantity });
			await itemsRepository.save({
				name: currentItem.name,
				quantity,
				owner: currentItem.owner,
				description,
				usedBy: unit,
				startedUseAt: new Date()
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
	public static async deleteUsage(id: string): Promise<void> {
		const itemsRepository = getRepository(Items);

		try {
			let a;
			const itemToDelete = await itemsRepository.findOne(id, {
				relations: [ 'owner', 'usedBy' ]
			});
			const itemsInInventory = await itemsRepository.find({
				owner: itemToDelete.owner,
				name: itemToDelete.name
			});
			itemsInInventory.forEach((i) => {
				if (i.usedBy !== null) {
					a = i;
				}
			});

			await itemsRepository.update(
				{ id: itemToDelete.id },
				{ readyToUseQuantity: a.quantity + itemToDelete.readyToUseQuantity }
			);
			await itemsRepository.delete({ id: a.id });
		} catch (e) {
			console.log(e.stack);
			throw new Error('Could not use items');
		}
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
					usedBy: owner
				});
			}
		} catch (e) {
			console.log(e.stack);
			throw new Error('Could not use items');
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
