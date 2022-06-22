import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ItemUsage } from './ItemUsage';
import { Unit } from './Unit';

@Entity('items')
export class Item {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column({ nullable: true })
  description?: string;

  @ManyToOne(() => Unit, (unit) => unit.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'owner_id', referencedColumnName: 'id' })
  owner: Unit;

  @OneToMany(() => ItemUsage, (usage) => usage.id)
  usedBy: ItemUsage[];

  @Column({
    name: 'started_use_at',
    type: 'timestamp without time zone',
    nullable: true,
  })
  createdAt?: Date;

  public constructor(data?: Item) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.quantity = data.quantity;
      this.description = data.description;
      this.owner = data.owner;
      this.createdAt = data.createdAt;
    }
  }
}
