import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('recipient')
export class Recipient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  emailAddress: string;

  @Column({ nullable: true })
  phoneNumber?: string;

  public constructor(data?: Recipient) {
    if (data) {
      this.name = data.name;
      this.emailAddress = data.emailAddress;
      this.phoneNumber = data.phoneNumber;
    }
  }
}
