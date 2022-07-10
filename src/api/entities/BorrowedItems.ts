import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { Unit } from './Unit';

@Entity('borrowed_items')
export class BorrowedItem {
	@PrimaryGeneratedColumn() id: string;

	@Column() itemId: string;

	@Column() description: string;

	@Column() quantity: number;

	@Column() usedBy: number;
}
export type CreateBorrowedItem = Omit<BorrowedItem, 'id'>;
