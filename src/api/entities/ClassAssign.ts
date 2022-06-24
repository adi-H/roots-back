import {
  Column,
  Entity,
  Exclusion,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Class } from './Class';
import { User } from './User';

@Entity('class_assign')
export class ClassAssign {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @ManyToOne((type) => Class, (assignedClass) => assignedClass.id)
  @JoinColumn({ name: 'assigned_class', referencedColumnName: 'id' })
  assignedClass: Class;

  @Column({ type: 'timestamp without time zone' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone' })
  endDate: Date;

  @ManyToOne((type) => User, (user) => user.id)
  @JoinColumn({ name: 'created_by', referencedColumnName: 'id' })
  createdBy: User;

  approvingUsers?: User[];

  @Column()
  isApproved: boolean;
}
