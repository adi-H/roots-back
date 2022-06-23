import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { Unit } from './Unit';

@Entity('borrowed_items')
export class BorrowedItems {
	@PrimaryGeneratedColumn() id: string;

	@Column() item_id: string;

	@Column() description: string;

	@Column() quantity: number;

	@Column() usedBy: number;
}
