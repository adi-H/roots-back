import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BorrowedItem } from './BorrowedItems';
import { Unit } from './Unit';

@Entity('items')
export class Items {
  @PrimaryGeneratedColumn() id: string;

  @Column() name: string;

  @Column() totalQuantity: number;

  @Column() unUseableQuantity: number;

  @Column({ nullable: true })
  description?: string;

  @ManyToOne((type) => Unit, (unit) => unit.id)
  @JoinColumn({ name: 'owner_id', referencedColumnName: 'id' })
  owner: Unit;

  @OneToMany((type) => BorrowedItem, (item) => item.item)
  borrowedByMe: BorrowedItem[];
}

export type CreateItem = Pick<
  Items,
  'name' | 'owner' | 'unUseableQuantity' | 'totalQuantity' | 'description'
>;
