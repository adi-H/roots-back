import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Role')
export class Role {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  public constructor(data?: Role) {
    if (data) {
      this.name = data.name;
    }
  }
}
