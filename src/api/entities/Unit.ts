import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('unit')
export class Unit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne((type) => Unit, (unit) => unit.id)
  @JoinColumn({ name: 'parent_id', referencedColumnName: 'id' })
  parent: Unit;

  @OneToMany(() => Unit, (unit) => unit.parent)
  children: Unit[];

  public constructor(data?: Unit) {
    if (data) {
      this.name = data.name;
      this.parent = data.parent;
    }
  }
}
