import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Building } from './Building';
import { ClassType } from './ClassType';
import { Unit } from './Unit';
import { User } from './User';

@Entity('class')
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne((type) => Building, (building) => building.id)
  @JoinColumn({ name: 'building_id', referencedColumnName: 'id' })
  building: Building;

  @ManyToOne((type) => Unit, (unit) => unit.id)
  @JoinColumn({ name: 'owner_unit_id', referencedColumnName: 'id' })
  owner: Unit;

  @ManyToOne((type) => ClassType, (classType) => classType.id)
  @JoinColumn({ name: 'type_id', referencedColumnName: 'id' })
  type: ClassType;

  @ManyToOne((type) => User, (user) => user.id)
  @JoinColumn({ name: 'keyholder_user_id', referencedColumnName: 'id' })
  keyholder?: User;

  @Column({ type: 'timestamp without time zone', nullable: true })
  sign_time?: Date;

  public constructor(data?: Class) {
    if (data) {
      this.name = data.name;
    }
  }
}
