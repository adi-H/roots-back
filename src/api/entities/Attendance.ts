import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { User } from './User';

@Entity('attendance')
export class Attendance {
  @OneToOne(() => User, (user) => user.id, {
    primary: true,
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @PrimaryColumn({ name: 'user_id' })
  userId: number;

  @Column({ nullable: true })
  reason: string;

  @Column({ name: 'in_attendance', nullable: true })
  inAttendance: boolean;

  public constructor(data?: Attendance) {
    if (data) {
      this.reason = data.reason;
      this.inAttendance = data.inAttendance;
    }
  }
}
