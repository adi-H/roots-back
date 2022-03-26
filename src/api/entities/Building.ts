import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('building')
export class Building {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  public constructor(data?: Building) {
    if (data) {
      this.name = data.name;
    }
  }
}
