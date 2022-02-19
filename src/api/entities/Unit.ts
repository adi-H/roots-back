import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Unit')
export class Unit {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @ManyToOne((type) => Unit, (unit) => unit.id)
  @JoinColumn({ name: 'parent_id', referencedColumnName: 'id' })
  parent: Unit;

  public constructor(data?: Unit) {
    if (data) {
      this.name = data.name;
      this.parent = data.parent;
    }
  }
}
