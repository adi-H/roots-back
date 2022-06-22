import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Item } from './Item';
import { Unit } from './Unit';

@Entity('item_usage')
export class ItemUsage {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Item, (item) => item.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'owner_id', referencedColumnName: 'id' })
  item: Item;

  @ManyToOne(() => Unit, (unit) => unit.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'used_by', referencedColumnName: 'id' })
  usedBy: Unit;

  @Column()
  quantity: number;

  @Column({
    name: 'reason',
    nullable: true,
  })
  reason: string;

  @Column({
    name: 'started_use_at',
    type: 'timestamp without time zone',
    nullable: true,
  })
  startedUseAt?: Date;

  public constructor(data?: ItemUsage) {
    if (data) {
      this.item = data.item;
      this.usedBy = data.usedBy;
      this.quantity = data.quantity;
      this.reason = data.reason;
      this.startedUseAt = data.startedUseAt;
    }
  }
}
