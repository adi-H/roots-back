import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Building } from './Building';
import { Unit } from './Unit';

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

  public constructor(data?: Class) {
    if (data) {
      this.name = data.name;
    }
  }
}
