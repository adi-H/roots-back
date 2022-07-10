import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
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
}

export type CreateItem = Pick<
  Items,
  'name' | 'owner' | 'unUseableQuantity' | 'totalQuantity' | 'description'
>;
