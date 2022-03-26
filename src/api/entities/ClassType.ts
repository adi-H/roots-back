import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('class_type')
export class ClassType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  public constructor(data?: ClassType) {
    if (data) {
      this.name = data.name;
    }
  }
}
