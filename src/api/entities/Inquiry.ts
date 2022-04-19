import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Recipient } from './Recipient';
import { User } from './User';

@Entity('inquiry')
export class Inquiry {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => User, (user) => user.id)
  @JoinColumn({ name: 'from_user_id', referencedColumnName: 'id' })
  from: User;

  @ManyToOne((type) => Recipient, (recipient) => recipient.id)
  @JoinColumn({ name: 'to_recipient_id', referencedColumnName: 'id' })
  to: Recipient;

  @Column()
  title: string;

  @Column()
  content: string;
}
