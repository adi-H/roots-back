import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Building } from './Building';
import { Unit } from './Unit';
import { User } from './User';

@Entity('Class')
export class Class {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @ManyToOne((type) => Building, (building) => building.id)
  @JoinColumn({ name: 'building_id', referencedColumnName: 'id' })
  building: Building;

  @ManyToOne((type) => Unit, (unit) => unit.id)
  @JoinColumn({ name: 'owner_unit_id', referencedColumnName: 'id' })
  owner: Unit;

  @ManyToOne((type) => User, (user) => user.id)
  @JoinColumn({ name: 'keyholder_user_id', referencedColumnName: 'id'})
  keyholder: User;

  public constructor(data?: Class) {
    if (data) {
      this.name = data.name;
    }
  }
}
