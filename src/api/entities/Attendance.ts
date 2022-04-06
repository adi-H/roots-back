import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { User } from './User';

@Entity('attendance')
export class Attendance {
  @OneToOne(() => User, (user) => user.id, { primary: true, cascade: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  reason: string;

  @Column({ name: 'in_attendance' })
  inAttendance: boolean;

  public constructor(data?: Attendance) {
    if (data) {
      this.reason = data.reason;
      this.inAttendance = data.inAttendance;
    }
  }
}
