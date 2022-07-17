import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Items } from './Items';
@Entity('borrowed_items')
export class BorrowedItem {
  @PrimaryGeneratedColumn() id: string;

  @Column() itemId: string;

  @Column() description: string;

  @Column() quantity: number;

  @Column() usedBy: number;

  @ManyToOne(() => Items, (item) => item.borrowedByMe)
  @JoinColumn({ name: 'item_id', referencedColumnName: 'id' })
  item: Items;
}
export type CreateBorrowedItem = Omit<BorrowedItem, 'id' | 'item'>;
