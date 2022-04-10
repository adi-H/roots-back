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
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column({ nullable: true })
  description?: string;

  @ManyToOne((type) => Unit, (unit) => unit.id)
  @JoinColumn({ name: 'owner_id', referencedColumnName: 'id' })
  owner: Unit;

  @ManyToOne((type) => Unit, (unit) => unit.id)
  @JoinColumn({ name: 'used_by', referencedColumnName: 'id' })
  usedBy: Unit;

  @Column({
    name: 'started_use_at',
    type: 'timestamp without time zone',
    nullable: true,
  })
  startedUseAt?: Date;

  public constructor(data?: Items) {}
}
