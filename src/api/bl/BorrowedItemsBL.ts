import { BorrowedItem, CreateBorrowedItem } from './../entities/BorrowedItems';
import { getRepository } from 'typeorm';

export class BorrowedItemsBL {
	/**
   * Get all of the borrowed
   * @param itemId The id of the owner company
   * @returns An array of the items owned by the company
   */
	public static async getBorrowedItems(itemId: number): Promise<BorrowedItem[]> {
		const borrowedItemsRepository = getRepository(BorrowedItem);

		return await borrowedItemsRepository.find({
			where: [ { item_id: itemId } ]
		});
	}

	/**
   * BorrowItem
   *
   * @param BorrowedItem borrowedItem
   */
	public static async borrowItem(borrowItem: CreateBorrowedItem): Promise<void> {
		const borrowedItemsRepository = getRepository(BorrowedItem);

		try {
			await borrowedItemsRepository.save(borrowItem);
		} catch (e) {
			console.log(e.stack);
			throw new Error('Could not use items');
		}
	}
}
