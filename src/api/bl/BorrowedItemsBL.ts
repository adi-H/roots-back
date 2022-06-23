import { BorrowedItems } from './../entities/BorrowedItems';
import { getRepository } from 'typeorm';
import { BorrowedItems } from '../entities/BorrowedItems';
import { CreateItem, Items } from '../entities/Items';
import { Unit } from '../entities/Unit';

export class BorrowedItemsBL {
	/**
   * Get all of the borrowed
   * @param itemId The id of the owner company
   * @returns An array of the items owned by the company
   */
	public static async getBorrowedItems(itemId: number): Promise<BorrowedItems[]> {
		const borrowedItemsRepository = getRepository(BorrowedItems);

		return await borrowedItemsRepository.find({
			where: [ { item_id: itemId } ]
		});
	}

	/**
   * BorrowItem
   *
   * @param BorrowedItem borrowedItem
   */
	public static async borrowItem(borrowItem: BorrowedItems): Promise<void> {
		const borrowedItemsRepository = getRepository(BorrowedItems);

		try {
			await borrowedItemsRepository.save(borrowItem);
		} catch (e) {
			console.log(e.stack);
			throw new Error('Could not use items');
		}
	}
}
