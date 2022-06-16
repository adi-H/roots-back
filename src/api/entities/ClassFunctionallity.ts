import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Class } from './Class';
import { User } from './User';

@Entity('class_functionallity')
export class ClassFunctionallity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  public constructor(data?: ClassFunctionallity) {
    if (data) {
      this.name = data.name;
    }
  }
}
