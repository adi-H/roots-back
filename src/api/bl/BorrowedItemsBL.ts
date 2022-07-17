import { BorrowedItem, CreateBorrowedItem } from './../entities/BorrowedItems';
import { getRepository } from 'typeorm';

export class BorrowedItemsBL {
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
