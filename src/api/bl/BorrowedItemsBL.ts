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

	public static async getBorrowedHistory(userId: number): Promise<BorrowedItem[]> {
		const borrowedItemsRepository = getRepository(BorrowedItem);

		return await borrowedItemsRepository.find({
			where: [ { ownerId: userId } ]
		}); 
	}

	public static async getBorrowedHistoryByItem(ownerId: number, itemId: number): Promise<BorrowedItem[]> {
		const borrowedItemsRepository = getRepository(BorrowedItem);

		return await borrowedItemsRepository.find({
			where: [ { ownerId }, { itemId } ]
		}); 
	}
}
