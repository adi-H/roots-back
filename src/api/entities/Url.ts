import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('url')
export class Url {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  public constructor(data?: Url) {
    if (data) {
      this.name = data.name;
      this.url = data.url;
    }
  }
}
